import { SupportedLanguage } from '@/locales/.generated/server'
import WhatClient from './what'

export default function WhatPage({ params: { lang } }: { params: { lang: SupportedLanguage } }) {
  return <WhatClient lang={lang} />
}
