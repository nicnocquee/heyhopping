import { cookies } from 'next/headers'
import ComingSoon from './comingsoon'
import { Metadata } from 'next'
import {
  SupportedLanguage,
  submit as submitMessage,
  error as errorMessage,
  backToHome,
  comingSoon,
  email,
  enterEmailCity,
  finishSubmission,
  finishSubmissionDescription,
  resendConfirmation,
  yourCity,
} from '@/locales/.generated/server'

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

export default function ComingSoonPage({
  params: { lang },
}: {
  params: { lang: SupportedLanguage }
}) {
  const city = cookies().get('city')?.value || yourCity(lang)

  return (
    <ComingSoon
      lang={lang}
      city={city}
      strings={{
        comingSoon: comingSoon(lang),
        email: email(lang),
        submit: submitMessage(lang),
        finishSubmission: finishSubmission(lang),
        finishSubmissionDescription: finishSubmissionDescription(lang),
        backToHome: backToHome(lang),
        enterEmailCity: enterEmailCity(lang, { city }),
        resendConfirmation: resendConfirmation(lang),
        error: errorMessage(lang),
      }}
    />
  )
}
