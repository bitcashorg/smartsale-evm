import createMiddleware from 'next-intl/middleware'

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'es', 'zh', 'id', 'vi'],

  // Used when no locale matches
  defaultLocale: 'en',
  localeDetection: true,
  localePrefix: 'always'
})

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(en|es|zh|id|vi)/:path*', '/((?!_next|_vercel|.*\\..*).*)']
}
