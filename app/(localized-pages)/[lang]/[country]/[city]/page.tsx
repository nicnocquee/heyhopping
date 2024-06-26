import { getCitiesByCountry } from '@/utils/search-cities'
import {
  supportedCountries,
  encodeUmlauts,
  findSupportedCountry,
  decodeUmlauts,
  capitalize,
} from './helpers'
import { GettingStarted } from '@/components/getting-started'
import type { Metadata } from 'next'
import {
  CountryCityIndex1,
  CountryCityIndex2,
  CountryCityIndex3,
} from '@/locales/.generated/locales-markdown'
import { SupportedLanguage } from '@/locales/.generated/server'

export async function generateStaticParams() {
  const params = (
    await Promise.all(
      supportedCountries.flatMap(async (country) => {
        const cities = await getCitiesByCountry(country.name)
        return cities.flatMap((city) =>
          country.languages.map((lang) => ({
            country: country.code,
            lang,
            city: encodeURIComponent(encodeUmlauts(city)).toLowerCase(),
          }))
        )
      })
    )
  ).flat()

  return params
}

export async function generateMetadata({
  params,
}: {
  params: { country: string; lang: string; city: string }
}): Promise<Metadata> {
  const title = {
    en: `HeyHopping | Find new friends in ${params.city}`,
    de: `HeyHopping | Finde neue Freunde in ${params.city}`,
    fr: `HeyHopping | Trouvez de nouveaux amis dans ${params.city}`,
    it: `HeyHopping | Trova nuovi amici in ${params.city}`,
  }

  const description = {
    en: `The easiest way to meet new people and make lasting friendships in ${params.city}.`,
    de: `Die einfachste Möglichkeit, neue Leute zu treffen und zu treffen, um zu langfristigen Freunden zu werden in ${params.city}.`,
    fr: `La plus facile manière de rencontrer de nouveaux amis et de tisser des amitiés durables dans ${params.city}.`,
    it: `La più semplice maniera per incontrare nuovi amici e creare amicizia duratura in ${params.city}.`,
  }

  return {
    title: title[params.lang as keyof typeof title] || title['en'],
    description: description[params.lang as keyof typeof description] || description['en'],
    keywords: [
      'meetup application',
      'meet',
      'new',
      'people',
      'date',
      'chat',
      'meetup',
      'social',
      'networking',
      'events',
      'restaurant',
      'concert',
      'stranger meetup',
    ],
    openGraph: {
      images: [
        {
          url: `https://www.heyhopping.com/screenshots/index.webp`,
          width: 1200,
          height: 630,
          alt: 'Heyhopping',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: title[params.lang as keyof typeof title] || title['en'],
      description: description[params.lang as keyof typeof description] || description['en'],
      images: [
        {
          url: `https://www.heyhopping.com/screenshots/index.webp`,
          width: 1200,
          height: 630,
          alt: 'Heyhopping',
        },
      ],
    },
  }
}

export const dynamicParams = false

export default function Page({
  params,
}: {
  params: { country: string; lang: SupportedLanguage; city: string }
}) {
  const { country, lang, city } = params
  const countryName = findSupportedCountry(country)?.name

  if (!countryName) {
    return <div>Country not supported yet</div>
  }

  const CountryCityToUse = getRandomElement([
    CountryCityIndex1,
    CountryCityIndex2,
    CountryCityIndex3,
  ])!

  return (
    <>
      <div className="prose prose-headings:mt-8 prose-headings:font-semibold prose-headings:text-black prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg dark:prose-headings:text-white">
        {CountryCityToUse({
          lang: lang as SupportedLanguage,
          city: capitalize(decodeUmlauts(city)),
        })}
      </div>
      <GettingStarted lang={lang} />
    </>
  )
}

const getRandomElement = <T,>(arr: T[]): T | undefined =>
  arr.length ? arr[Math.floor(Math.random() * arr.length)] : undefined
