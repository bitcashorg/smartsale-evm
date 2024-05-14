'use client'

import { getSesssion } from '@/actions'
import { genLoginSigningRequest } from '@/lib/eos'
import { useSupabaseClient } from '@/lib/supabase'
import { createContextHook } from '@blockmatic/hooks-utils'
import { useConnectModal } from '@rainbow-me/rainbowkit'
import { Tables } from '@repo/supabase'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React, { ReactNode, useEffect, useState } from 'react'
import { isMobile } from 'react-device-detect'
import { useAsync, useLocalStorage, useToggle } from 'react-use'

// Exports
export { SessionProvider, useSession }

// don export this fn must be wrapped for context to work
function useSessionFn() {
  const supabase = useSupabaseClient()
  const [newSessionId] = useState(crypto.randomUUID())
  const searchParams = useSearchParams()
  const paramsSessionId = searchParams.get('session_id')
  const pathname = usePathname()
  const router = useRouter()
  const { openConnectModal } = useConnectModal()
  // this controls the session dialog with register and login qr codes
  // when login qr code is display a new esr is created and saved on db for later reference on callback call
  const [showSessionDialog, toggleShowSessionDialog] = useToggle(false)
  const [session, setSession] = useLocalStorage<Tables<'session'> | null>(
    'bitcash-session'
  )
  const loginSR = useAsync(() => genLoginSigningRequest(newSessionId))
  const loginUri = loginSR?.value?.encode()

  // subscribe to supabase session table and set session state
  // this table get updated by /api/esr callback invoked by the signing wallet
  useEffect(() => {
    //  we dont need to subscribe on mobile
    if (isMobile) return

    console.log(`🧑🏻‍💻 🍓 subscribing to session ${newSessionId}`)
    const channel = supabase
      .channel('session')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'session' },
        payload => {
          console.log('BAZINGA 🍓 new supabase session', payload.new)
          // set new session if ids match
          if (session || payload.new.id !== newSessionId) return
          console.log(' ✅ supabase session id matches', payload.new)
          setSession(payload.new as Tables<'session'>)
          toggleShowSessionDialog(false)
        }
      )
      .subscribe()

    return () => {
      console.log(`XX unsubscribing to session ${newSessionId}`)
      supabase.removeChannel(channel)
    }
  }, [setSession, supabase, isMobile])

  // // open session from url search params
  useEffect(() => {
    if (!paramsSessionId) return
    console.log(`💥💥 url session effect  ${paramsSessionId}`)
    // get session from server action and remove
    const getSession = async () => {
      console.log(`getting session ${paramsSessionId}`)
      const formData = new FormData()
      formData.append('session_id', paramsSessionId)

      const session = await getSesssion(formData)
      console.log(`session ${paramsSessionId}`, session)
      if (!session) return
      // TODO: move this logic to backend
      // set cookie session
      setSession(session)
      console.log('✅ session', session)
      // Encoding the query and managing search parameters
      const params = new URLSearchParams(searchParams)
      params.delete('session_id')
      router.replace(`${pathname}`)
    }

    getSession()
  }, [paramsSessionId])

  // default moblie login mode is redirect
  const loginRedirect = () => {
    if (!loginUri || !open) return
    // post request to parent if present
    window.parent &&
      window.parent.postMessage({ eventType: 'esr', code: loginUri }, '*')

    // redirect with esr and callback on mobile
    const params = new URLSearchParams()
    params.append('esr_code', loginUri.replace('esr://', ''))
    const callbackUrl = `${window.location.href}?session_id=${newSessionId}`
    console.log('💥 callbackUrl', callbackUrl)
    const encodedCallbackUrl = encodeURIComponent(callbackUrl)
    params.append('callback', encodedCallbackUrl)
    const referrer = searchParams.get('referrer')
    if (referrer) {
      params.append('referrer', referrer)
    }
    location.href = `https://app.bitcash.org?${params.toString()}`
  }

  // show rainbowkit to link evm wallet if logged in
  // else call login action depending base on viewport
  const loginOrConnect = () => {
    console.log('login or connect', session, openConnectModal)
    session && openConnectModal
      ? openConnectModal()
      : isMobile
        ? loginRedirect()
        : toggleShowSessionDialog(true)
  }

  const logout = () => {
    console.log('logout')
    setSession(null)
    router.refresh()
  }

  return {
    newSessionId,
    session,
    loginUri,
    showSessionDialog,
    logout,
    loginRedirect,
    openConnectModal,
    loginOrConnect,
    toggleShowSessionDialog
  }
}

function SessionProvider({ children }: { children: ReactNode }) {
  return (
    <React.Suspense fallback={<div />}>
      <SessionProviderInner>{children}</SessionProviderInner>
    </React.Suspense>
  )
}

const [useSession, SessionProviderInner] = createContextHook(
  useSessionFn,
  'You must wrap your application with <SessionProvider /> in order to useSession().'
)
