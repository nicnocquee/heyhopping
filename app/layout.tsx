import { GeistSans } from 'geist/font/sans'
import './globals.css'
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="bg-background text-foreground">{children}</body>
    </html>
  )
}
