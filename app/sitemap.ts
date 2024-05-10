/* eslint-disable @typescript-eslint/no-explicit-any */
import { MetadataRoute } from 'next'
import { generateStaticParams } from './(localized-pages)/[country]/[lang]/[city]/page'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages = [
    {
      url: 'https://www.heyhopping.com',
    },
  ]

  const countryLangCityPages = await generateStaticParams()

  const grouped = countryLangCityPages.reduce((acc, cur) => {
    const country = cur.country
    const lang = cur.lang
    const city = cur.city
    const identifier = `${country}/${city}`
    if (!acc[identifier]) {
      acc[identifier] = {}
    }
    if (lang === 'en') {
      acc[identifier].url = `https://www.heyhopping.com/${country}/en/${city}`
    } else {
      if (!acc[identifier].alternates) {
        acc[identifier].alternates = {
          languages: {},
        }
      }

      acc[identifier].alternates.languages[lang] =
        `https://www.heyhopping.com/${country}/${lang}/${city}`
    }
    return acc
  }, {} as any)

  Object.keys(grouped).forEach((key) => {
    const item = grouped[key]
    pages.push(item)
  })

  const data = pages.map((page) => {
    return {
      ...page,
      changeFrequency: 'daily' as const,
      priority: 1,
      lastModified: new Date(),
    }
  })

  return data
}
