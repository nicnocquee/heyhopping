import Link from 'next/link'
import { Button } from './ui/button'
import { getStarted } from '@/app/locales/generated/locales'

export const GettingStarted = ({ lang = 'en' }: { lang?: string }) => {
  return (
    <Button asChild className="self-center px-6 py-8 text-2xl">
      <Link href="/comingsoon">{getStarted(lang)}</Link>
    </Button>
  )
}
