import { GeistSans } from 'geist/font/sans'
import '../globals.css'
import { env } from '@/app/env'

const defaultUrl = env.VERCEL_URL ? `https://${env.VERCEL_URL}` : 'http://localhost:3000'

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: 'HeyHopping | Find new friends in your city',
  description: 'The easiest way to meet new people and make lasting friendships in your city.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // eslint-disable-next-line jsx-a11y/html-has-lang
    <html className={GeistSans.className}>
      <body className="bg-background text-foreground">{children}</body>
    </html>
  )
}
