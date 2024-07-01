'use server'

import { cookies } from 'next/headers'
import { fromEntries } from 'smartsale-lib'
import { handleAxiosError } from '@/lib/utils'
import axios from 'axios'
import { Resend } from 'resend'
import { z } from 'zod'
import { createSupabaseServerClient } from '@/services/supabase'
import { preSaleInsertSchema } from '@repo/supabase'

// get session object by id
export async function getSesssion(formData: FormData) {
  console.log('💥 actions: getSession')
  try {
    const { session_id } = fromEntries(formData)
    console.log(`😊 getting session object for ${session_id}`)
    const supabase = await createSupabaseServerClient()
    const { data, error } = await supabase
      .from('session')
      .select('*')
      .eq('id', String(session_id).trim())
      .order('created_at', { ascending: false })
      .limit(1)
      .single()

    if (error) console.log('🤌🏻🤌🏻🤌🏻', error)
    if (!data) return null
    return data
  } catch (error) {
    throw new Error('Something went wrong')
  }
}

export async function registerAddress(formData: FormData) {
  try {
    const o = fromEntries(formData)
    console.log('register address input', o)
    const data = preSaleInsertSchema.parse({
      ...o,
      project_id: parseInt(o.project_id),
      created_at: new Date().toDateString()
    })
    const supabase = await createSupabaseServerClient()
    const { data: createdEntry, error } = await supabase
      .from('pre_sale')
      .insert([data])
      .select('*')

    if (error)
      throw new Error(
        `Error creating pre-sale registration entry: ${error.message}`
      )
    console.log(
      'Pre-sale registration entry created successfully:',
      createdEntry
    )
    return createdEntry // Return the newly created entry
  } catch (error) {
    console.log(error)
    throw new Error('Something went wrong')
  }
}

async function validateRecaptcha(recaptchaToken: string): Promise<boolean> {
  const response = await axios.post(
    `https://www.google.com/recaptcha/api/siteverify`,
    {},
    {
      params: {
        secret: process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY,
        response: recaptchaToken
      }
    }
  )

  return response.data.success
}

export async function subscribeToNewsletter(
  data: FormData
): Promise<ActionState> {
  const resend = new Resend(process.env.RESEND_API_KEY)

  const NewsletterSchema = z.object({
    email: z.string().email(),
    recaptcha: z.string()
  })

  // Convert FormData to a plain object to validate
  const formData = Object.fromEntries(data)
  console.log('✅ formData:', formData)
  try {
    // Validate the form data against the schema
    const validatedData = NewsletterSchema.parse(formData)

    // Validate recaptcha with Google's servers
    const isRecaptchaValid = await validateRecaptcha(validatedData.recaptcha)
    if (!isRecaptchaValid) throw new Error('Invalid recaptcha')

    const res = await resend.contacts.create({
      audienceId: process.env.RESEND_AUDIENCE_ID || '',
      email: validatedData.email
    })

    if (res.error) throw res.error

    console.log('✅  newsletter reg', validatedData.email)
    return { data: `${validatedData.email} successfully registered.` }
  } catch (error) {
    console.log('🚨 newsletter reg error', error)
    return { error: 'Unexpected error' }
  }
}

// generate dub.co links
export async function generateShortLink(path: string) {
  const cookieStorage = cookies()
  try {
    const getShareLinkCookies = cookieStorage.get('bitlauncher-share-link')
    const resolved: DubShareLinkResponse = !getShareLinkCookies
      ? await axios
          .post(
            `https://api.dub.co/links?workspaceId=${process.env.DUB_WORKSPACE_ID}`,
            {
              domain: 'bitcash.to',
              url: `https://bitlauncher.ai${path}`
            },
            {
              headers: {
                Authorization: `Bearer ${process.env.DUB_API_KEY}`,
                'Content-Type': 'application/json'
              }
            }
          )
          .then(res => res.data)
      : (JSON.parse(getShareLinkCookies.value) as DubShareLinkResponse)

    if (!resolved) throw new Error('Failed to generate short link')

    return {
      data: {
        key: resolved.key,
        shortLink: resolved.shortLink,
        qrCode: resolved.qrCode
      },
      error: null
    }
  } catch (error) {
    const errorData = handleAxiosError(error)
    console.log('Failed to generate short link: ==> ', errorData)
    return {
      data: null,
      error: errorData.data.error.message
    }
  }
}

export interface DubShareLinkResponse {
  key: string
  shortLink: string
  qrCode: string
}

export type ActionState = {
  data?: string
  error?: string
}
