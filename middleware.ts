import { type NextRequest } from 'next/server'
import { updateSession } from '@/utils/supabase/middleware'
import { supportedCountries } from './app/(localized-pages)/[lang]/[country]/[city]/helpers'

export async function middleware(request: NextRequest) {
  const response = await updateSession(request)

  const city = request.geo?.city || ''
  const country = request.geo?.country || ''
  response.cookies.set('city', city)
  response.cookies.set('country', country)

  const url = new URL(request.url)
  const pathname = url.pathname

  if (pathname === '/') {
    const supportedCountry = supportedCountries.find(
      (c) => c.code.toLowerCase() === country.toLowerCase()
    )
    if (supportedCountry) {
      const lang = supportedCountry.languages[0]

      return Response.redirect(new URL(`/${lang}`, request.url), 301)
    }
  }

  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    {
      source: '/((?!api|tags|experiments|_next/static|_next/image|favicon.ico).*)',
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
      ],
    },
  ],
}
