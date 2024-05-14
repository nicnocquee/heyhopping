'use client'

import {
  defaultCountry,
  supportedCountries,
} from '@/app/(localized-pages)/[lang]/[country]/[city]/helpers'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useStrings } from '@/locales/.generated/client/hooks'
import { SupportedLanguage } from '@/locales/.generated/server'
import { usePathname, useRouter } from 'next/navigation'

export default function LangPicker({ lang, country }: { lang: string; country: string }) {
  const pathname = usePathname()
  const router = useRouter()
  const strings = useStrings(['de', 'en', 'fr', 'it'])
  if (!strings) {
    return null
  }

  const langsToUse =
    supportedCountries.find((c) => c.code === country)?.languages || defaultCountry.languages

  return (
    <Select
      defaultValue={lang}
      onValueChange={(value) => router.push(`/${value}/${pathnameWithoutLang(pathname)}`)}
    >
      <SelectTrigger className="w-[100px] border-0 bg-transparent text-white">
        <SelectValue placeholder="Language" />
      </SelectTrigger>
      <SelectContent>
        {langsToUse.map((code) => {
          return (
            <SelectItem key={code} value={code}>
              {strings[code as SupportedLanguage]}
            </SelectItem>
          )
        })}
      </SelectContent>
    </Select>
  )
}

const pathnameWithoutLang = (pathname: string) => {
  const [, , ...rest] = pathname.split('/')
  return rest.join('/')
}
