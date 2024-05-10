import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['/']

  return pages.map((page) => ({
    url: page,
    lastModified: new Date(),
    changefreq: 'daily',
    priority: 1,
  }))
}
