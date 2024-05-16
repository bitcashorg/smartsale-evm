import Link from 'next/link'
import * as React from 'react'
import {
  IconBitlauncher,
  IconDiscord,
  IconUSFlag,
  IconESFlag,
  IconCNFlag,
  IconIDFlag,
  IconVNFlag
} from '../ui/icons'
import { Button, buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { NavLinks } from './nav-links'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { SessionButtonLoader } from './session/session-button'
import { MobileNavLoader } from './mobile-nav'
import { useLocale, useTranslations } from 'next-intl'

type LangList = {
  [key: string]: { flag: React.ComponentType<any>; name: string }
}

export const langList: LangList = {
  en: { flag: IconUSFlag, name: 'English' },
  es: { flag: IconESFlag, name: 'Español' },
  zh: { flag: IconCNFlag, name: '中文' },
  id: { flag: IconIDFlag, name: 'bahasa Indonesia' },
  vi: { flag: IconVNFlag, name: 'Tiếng Việt' }
}

export function Header() {
  return (
    <div className="sticky top-0 z-50 flex h-16 bg-background">
      <div className="container flex flex-row items-center justify-between bg-background px-4">
        <div className="flex h-full items-center md:min-w-[300px]">
          <Link shallow href="/">
            <IconBitlauncher />
          </Link>
        </div>

        <div className="hidden md:flex md:gap-3 md:pl-4 lg:ml-[-1px] lg:gap-10">
          <NavLinks />
        </div>

        {/* Desktop action buttons */}
        <div className="hidden items-center justify-end md:flex md:min-w-[300px] md:gap-3 lg:gap-5">
          {/* <DiscordButton /> */}
          <Suspense fallback={<Button>Login</Button>}>
            <DynamicSessionButton />
          </Suspense>
        </div>

        {/* mobile navbar icon */}
        <div className="flex md:hidden">
          <DynamicMobileNav />
        </div>
      </div>
    </div>
  )
}

const DynamicMobileNav = dynamic(
  () => import('./mobile-nav').then(c => c.MobileNav),
  {
    loading: MobileNavLoader,
    ssr: false
  }
)

const DynamicSessionButton = dynamic(
  () => import('./session/session-button').then(c => c.SessionButton),
  {
    loading: SessionButtonLoader,
    ssr: false
  }
)

function DiscordButton() {
  return (
    <Link
      href="https://discord.gg/KuR48XUxnG"
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        buttonVariants({
          variant: 'outline',
          radius: 'full'
        }),
        'border-transparent md:border-accent-secondary md:px-3 lg:px-10'
      )}
    >
      <IconDiscord className={'block size-7 fill-accent-secondary md:hidden'} />
      <span className="hidden md:block">Discord</span>
    </Link>
  )
}
