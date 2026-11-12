import type { MetadataRoute } from 'next'

import { SITE_URL } from './(frontend)/seo'

const ROUTES = [
  '',
  '/vision',
  '/workshops',
  '/content-library',
  '/partners',
  '/accessibility',
  '/privacy-policy',
]

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
  }))
}
