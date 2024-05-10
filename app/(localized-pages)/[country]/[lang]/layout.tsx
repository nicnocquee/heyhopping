import { GeistSans } from 'geist/font/sans'
import '../../../globals.css'
import { TooltipProvider } from '@/components/ui/tooltip'
import { CSPostHogProvider, CookieBanner } from '@/app/analytics'
import { Toaster } from '@/components/ui/sonner'
import { env } from '@/app/env'

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
  params: { country: string; lang: string }
}) {
  return (
    <html lang={params.lang} className={GeistSans.className}>
      <body className="bg-background text-foreground">
        <Toaster />
        <CSPostHogProvider>
          <TooltipProvider>
            <main className="flex min-h-screen flex-col items-center">{children}</main>
            <footer className="flex w-full justify-center space-x-4 border-t border-t-foreground/10 p-8 text-center text-xs">
              <p>Made in Switzerland</p>
              <p>
                <a href="mailto:hi@heyhopping.com">Contact</a>
              </p>
            </footer>
          </TooltipProvider>
          <CookieBanner />
        </CSPostHogProvider>
      </body>
    </html>
  )
}
