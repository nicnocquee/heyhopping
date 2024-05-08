// app/providers.js
'use client'
import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'
import { Button } from '@/components/ui/button'
import { usePostHog } from 'posthog-js/react'
import { useEffect, useState } from 'react'

if (typeof window !== 'undefined') {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST!,
    persistence: cookieConsentGiven() === 'yes' ? 'localStorage+cookie' : 'memory',
  })
}
export function CSPostHogProvider({ children }: { children: React.ReactNode }) {
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>
}

export function cookieConsentGiven() {
  if (!localStorage.getItem('cookie_consent')) {
    return 'undecided'
  }
  return localStorage.getItem('cookie_consent')
}

export function CookieBanner() {
  const [consentGiven, setConsentGiven] = useState<string | null>('')
  const posthog = usePostHog()

  useEffect(() => {
    // We want this to only run once the client loads
    // or else it causes a hydration error
    setConsentGiven(cookieConsentGiven())
  }, [])

  useEffect(() => {
    if (consentGiven !== '') {
      posthog.set_config({ persistence: consentGiven === 'yes' ? 'localStorage+cookie' : 'memory' })
    }
  }, [consentGiven])

  const handleAcceptCookies = () => {
    localStorage.setItem('cookie_consent', 'yes')
    setConsentGiven('yes')
  }

  const handleDeclineCookies = () => {
    localStorage.setItem('cookie_consent', 'no')
    setConsentGiven('no')
  }

  return (
    <div>
      {consentGiven === 'undecided' && (
        <div className="absolute bottom-0 w-full space-y-4 border-t border-t-foreground/10 bg-background p-4 text-center text-sm">
          <p>
            Hey, we use cookies to see how you use our stuff and make it better. Can you cool with
            that and let us use 'em?
          </p>
          <Button variant={'secondary'} onClick={handleAcceptCookies}>
            Accept
          </Button>
          <span> </span>
          <Button variant={'outline'} onClick={handleDeclineCookies}>
            Decline
          </Button>
        </div>
      )}
    </div>
  )
}
