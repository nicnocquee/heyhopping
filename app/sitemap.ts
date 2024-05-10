import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['https://www.heyhopping.com']
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
