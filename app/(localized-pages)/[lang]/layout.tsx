import { GeistSans } from 'geist/font/sans'
import '../../globals.css'
import { TooltipProvider } from '@/components/ui/tooltip'
import { CSPostHogProvider, CookieBanner } from '@/app/analytics'
import { Toaster } from '@/components/ui/sonner'
import { env } from '@/app/env'
import Footer from '@/components/footer'

const defaultUrl = env.VERCEL_URL ? `https://${env.VERCEL_URL}` : 'http://localhost:3000'

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: 'HeyHopping | Find new friends in your city',
  description: 'The easiest way to meet new people and make lasting friendships in your city.',
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang?: string }
}) {
  const langToUse = params.lang || 'en'
  return (
    <html lang={langToUse} className={GeistSans.className}>
      <body className="bg-background text-foreground">
        <Toaster />
        <CSPostHogProvider>
          <TooltipProvider>
            <main className="flex min-h-screen flex-col items-center">{children}</main>
            <Footer />
          </TooltipProvider>
          <CookieBanner />
        </CSPostHogProvider>
      </body>
    </html>
  )
}
