import { SupportedLanguage, getStarted, simplifyMeeting } from '@/locales/.generated/server'

export default function WhatPage({ params: { lang } }: { params: { lang: SupportedLanguage } }) {
  return (
    <div className="flex h-screen w-screen flex-1 flex-col items-center justify-center space-y-4 text-xl">
      <p>{getStarted(lang)}</p>
      <p>{simplifyMeeting(lang)}</p>
    </div>
  )
}
