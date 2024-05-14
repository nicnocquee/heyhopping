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
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'

import { useStrings } from '@/locales/.generated/client/hooks'
import { SupportedLanguage, changeLanguage } from '@/locales/.generated/server'
import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'

export default function LangPicker({ lang, country }: { lang: string; country: string }) {
  const pathname = usePathname()
  const router = useRouter()
  const strings = useStrings(['de', 'en', 'fr', 'it', 'changeLanguage'])
  if (!strings) {
    return null
  }

  const langsToUse =
    supportedCountries.find((c) => c.code === country)?.languages || defaultCountry.languages

  return (
    <>
      <div className="hidden sm:block">
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
      </div>
      <div className="m-0 flex items-center p-0 sm:hidden">
        <Drawer>
          <DrawerTrigger className="flex flex-row items-center space-x-2">
            <span>{strings[lang as SupportedLanguage]}</span> <ChevronDown className="h-4 w-4" />
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>{changeLanguage(lang as SupportedLanguage)}</DrawerTitle>
              <DrawerDescription>
                <div className="text-md flex flex-col space-y-4 py-6">
                  {langsToUse.map((code) => {
                    return (
                      <Link key={code} href={`/${code}/${pathnameWithoutLang(pathname)}`}>
                        {strings[code as SupportedLanguage]}
                      </Link>
                    )
                  })}
                </div>
              </DrawerDescription>
            </DrawerHeader>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  )
}

const pathnameWithoutLang = (pathname: string) => {
  const [, , ...rest] = pathname.split('/')
  return rest.join('/')
}
