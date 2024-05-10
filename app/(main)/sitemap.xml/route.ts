/* eslint-disable @typescript-eslint/no-explicit-any */
import { generateStaticParams } from '@/app/(localized-pages)/[country]/[lang]/[city]/page'
import { MetadataRoute } from 'next'

export const dynamic = 'force-dynamic' // defaults to auto

export async function GET() {
  const data = await sitemap()
  const xmlData = `<?xml version="1.0" encoding="UTF-8" ?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xmlns:xhtml="http://www.w3.org/1999/xhtml"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
      http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd
      http://www.w3.org/1999/xhtml
      http://www.w3.org/2002/08/xhtml/xhtml1-strict.xsd">
  ${data
    .map((page) => {
      const content = `<url>
      <loc>${page.url}</loc>
      <lastmod>${typeof page.lastModified === 'string' ? page.lastModified : page.lastModified ? page.lastModified.toISOString() : new Date().toISOString()}</lastmod>    
      <changefreq>${page.changeFrequency}</changefreq>
      <priority>${page.priority}</priority>
      ${
        page.alternates?.languages
          ? Object.entries(page.alternates.languages)
              .map((langString) => {
                const [lang, url] = langString
                return `<xhtml:link rel="alternate" hreflang="${lang}" href="${url}" />`
              })
              .join('\n')
          : ''
      }
      </url>`
      return content
    })
    .join('\n')}
   
  </urlset>`

  return new Response(xmlData, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}

async function sitemap(): Promise<MetadataRoute.Sitemap> {
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
