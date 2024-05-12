import Link from 'next/link'
import { Button } from './ui/button'
import { SupportedLanguage, getStarted } from '@/locales/.generated/locales'

export const GettingStarted = ({ lang = 'en' }: { lang?: SupportedLanguage }) => {
  return (
    <Button asChild className="self-center px-6 py-8 text-2xl">
      <Link href={`/${lang}/comingsoon`}>{getStarted(lang)}</Link>
    </Button>
  )
}
