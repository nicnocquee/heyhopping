'use client'

import { SupportedLanguage } from '@/locales/.generated/server'
import { useEffect, useState } from 'react'

export default function WhatClient({ lang }: { lang: SupportedLanguage }) {
  const [getStartedString, setGetStartedString] = useState<string | null>(null)
  const [simplifyMeetingString, setSimplifyMeetingString] = useState<string | null>(null)
  useEffect(() => {
    async function loadLocale(key: string) {
      if (key === 'getStarted') {
        if (lang === 'en') {
          const data = await import(`@/locales/.generated/client/en/getStarted`).then(
            (d) => d.getStarted
          )
          setGetStartedString(data)
        } else if (lang === 'de') {
          const data = await import(`@/locales/.generated/client/de/getStarted`).then(
            (d) => d.getStarted
          )
          setGetStartedString(data)
        }
      } else if (key === 'simplifyMeeting') {
        if (lang === 'en') {
          const data = await import(`@/locales/.generated/client/en/simplifyMeeting`).then(
            (d) => d.simplifyMeeting
          )
          setSimplifyMeetingString(data)
        } else if (lang === 'de') {
          const data = await import(`@/locales/.generated/client/de/simplifyMeeting`).then(
            (d) => d.simplifyMeeting
          )
          setSimplifyMeetingString(data)
        }
      }
    }

    loadLocale('getStarted')
    loadLocale('simplifyMeeting')
  }, [lang])
  return (
    <div className="flex h-screen w-screen flex-1 flex-col items-center justify-center space-y-4 text-xl">
      <h1>{getStartedString}</h1>
      <p>{simplifyMeetingString}</p>
    </div>
  )
}
