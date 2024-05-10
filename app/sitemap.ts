import { MetadataRoute } from 'next'
import { generateStaticParams } from './[country]/[lang]/[city]/page'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages = ['https://www.heyhopping.com']

  const countryLangCityPages = await generateStaticParams()

  pages.push(
    ...countryLangCityPages.map(({ country, lang, city }) => {
      return `https://www.heyhopping.com/${country}/${lang}/${city}`
    })
  )

  return pages.map((url) => ({
    url,
    lastModified: new Date(),
    // alternates: {
    //   languages: {
    //     es: 'https://www.heyhopping.com/es',
    //     de: 'https://www.heyhopping.com/de',
    //   },
    // },
    changefreq: 'daily',
    priority: 1,
  }))
}
