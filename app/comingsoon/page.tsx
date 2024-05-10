import { cookies } from 'next/headers'
import ComingSoon from './comingsoon'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'HeyHopping | Coming Soon',
  description: 'Get into the waiting list and be notified when we launch!',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function ComingSoonPage() {
  const city = cookies().get('city')?.value || 'your city'

  return <ComingSoon city={city} />
}
