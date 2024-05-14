import Link from 'next/link'
import Image from 'next/image'
import { getStarted } from '@/locales/.generated/server'
import { SupportedLanguage } from '@/locales/.generated/server'
import HeyhoppingLogo from '@/public/heyhopping-logo.webp'
import LangPicker from './lang-picker'

export default function HeaderNav({ lang, country }: { lang: SupportedLanguage; country: string }) {
  return (
    <nav className="absolute top-0 z-10 flex h-16 w-full justify-center border-b border-b-foreground/10 bg-transparent">
      <HeaderNavContent lang={lang} country={country} />
    </nav>
  )
}

export function HeaderNavContent({ lang, country }: { lang: SupportedLanguage; country: string }) {
  return (
    <div className="flex w-full max-w-6xl items-center justify-between p-3 text-sm">
      <Image alt="Heyhopping" src={HeyhoppingLogo} width={40} height={40} />
      <div className="flex space-x-4">
        <LangPicker lang={lang} country={country} />
        <Link
          href={`/${lang}/comingsoon`}
          className="bg-btn-background hover:bg-btn-background-hover flex rounded-md px-3 py-2 font-semibold text-white no-underline"
        >
          {getStarted(lang)}
        </Link>
      </div>
    </div>
  )
}
