import Link from 'next/link'
import { generateStaticParams as generateStaticParamsCity } from './[city]/page'
import { capitalize, decodeUmlauts, supportedCountries } from './[city]/helpers'
import { getCountry } from '@/utils/search-cities'
import Image from 'next/image'
import HeyhoppingLogo from '@/public/heyhopping-logo.webp'
import { CountryIndex } from '@/locales/.generated/locales-markdown'
import { SupportedLanguage } from '@/locales/.generated/server'

export async function generateStaticParams() {
  const params = (
    await Promise.all(
      supportedCountries.flatMap(async (country) => {
        return country.languages.flatMap((lang) => ({
          country: country.code,
          lang,
        }))
      })
    )
  ).flat()

  return params
}

export default async function Page({
  params: { country, lang },
}: {
  params: { country: string; lang: string }
}) {
  const data = await generateStaticParamsCity()
  const theCountry = await getCountry(country)
  return (
    <div className="flex flex-col items-center justify-center space-y-8 p-2 text-foreground sm:p-8">
      <Link href="/">
        <Image alt="Heyhopping" src={HeyhoppingLogo} width={200} height={200} />
      </Link>

      <div className="prose prose-headings:mt-8 prose-headings:font-semibold prose-headings:text-black prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg dark:prose-headings:text-white">
        <CountryIndex country={theCountry.name} lang={lang as SupportedLanguage} />
      </div>
      <div className="grid grid-cols-1 gap-6 p-4 py-8 text-foreground sm:grid-cols-4">
        {data
          .filter((page) => page.lang.toLowerCase() === lang.toLowerCase())
          .sort((a, b) => a.city.localeCompare(b.city))
          .map((page) => {
            return (
              <Link
                prefetch={false}
                className="underline"
                href={`/${page.lang}/${page.country}/${page.city}`}
                key={`/${page.lang}/${page.country}/${page.city}`}
              >
                {capitalize(decodeUmlauts(decodeURIComponent(page.city)))}
              </Link>
            )
          })}
      </div>
    </div>
  )
}
