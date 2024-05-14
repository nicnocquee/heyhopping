import { HeaderNavContent } from '@/components/header-nav'
import { SupportedLanguage } from '@/locales/.generated/server'
import Link from 'next/link'
import Image from 'next/image'
import HeyhoppingLogo from '@/public/heyhopping-logo.webp'

export default function CountryLayout({
  children,
  params: { lang = 'en', country = 'default' },
}: {
  children: React.ReactNode
  params: { lang?: SupportedLanguage; country?: string }
}) {
  return (
    <div className="flex flex-col items-center justify-center space-y-8 p-4 text-foreground sm:p-8">
      <div className="flex w-full flex-col text-foreground [&_a]:text-foreground [&_button]:text-foreground [&_p]:text-foreground">
        <HeaderNavContent lang={lang} country={country} />
      </div>
      <br />
      <Link href={`/${lang}`}>
        <Image alt="Heyhopping" src={HeyhoppingLogo} width={200} height={200} />
      </Link>

      {children}
    </div>
  )
}
