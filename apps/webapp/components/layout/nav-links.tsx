'use client'

import { useSession } from '@/hooks/use-session'
import { appConfig } from '@/lib/config'
import { useAccountModal, useConnectModal } from '@rainbow-me/rainbowkit'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { formatAddress } from 'smartsale-lib'
import { useAccount } from 'wagmi'

export function NavLinks({ mobile = false }: { mobile?: boolean }) {
  const { loginRedirect, session, logout } = useSession()
  const { openConnectModal } = useConnectModal()
  const { openAccountModal } = useAccountModal()
  const { address } = useAccount()
  const router = useRouter()
  const bitcashAccount = session?.account
  const t = useTranslations('header')

  const links = [
    {
      id: 'login',
      href: null,
      text: bitcashAccount ? bitcashAccount : t('login_with_bitcash'),
      mobile: true,
      action: bitcashAccount ? null : loginRedirect,
      disabled: false
    },
    {
      id: 'connect',
      href: null,
      text: address ? formatAddress(address) : t('connect_your_evm_wallet'),
      mobile: true,
      action: () =>
        bitcashAccount
          ? openConnectModal && openConnectModal()
          : openAccountModal && openAccountModal(),
      disabled: !bitcashAccount
    },
    {
      id: 'wallet',
      href: '/wallet',
      text: t('wallet'),
      mobile: true,
      action: null,
      disabled: !appConfig.features.enableWalletAccess
    },
    {
      id: 'about',
      href: '/about',
      text: t('about'),
      mobile: false,
      action: null,
      disabled: false
    },
    {
      id: 'whitepaper',
      href: '/whitepaper',
      text: t('whitepaper'),
      mobile: false,
      action: null,
      disabled: false
    },
    {
      id: 'security',
      href: '/security',
      text: t('security'),
      mobile: false,
      action: null,
      disabled: false
    },
    {
      id: 'logout',
      href: null,
      action: logout,
      text: t('sign_out'),
      mobile: true,
      disabled: !bitcashAccount
    }
  ] as const

  return links.map(link => {
    if ((link.mobile && !mobile) || link.disabled) return null

    return (
      <Link
        key={`${mobile ? 'mobile' : 'desktop'}-link-${link.href}-${crypto.randomUUID()}`}
        shallow
        className="flex"
        href={link.href || location.href}
        onClick={e => {
          e.preventDefault()
          if (link.action) return link.action()
          if (link.href) router.push(link.href)
        }}
        aria-disabled={link.disabled}
      >
        {link.text}
      </Link>
    )
  })
}
