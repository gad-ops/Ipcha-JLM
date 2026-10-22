import type { Metadata } from 'next'

const SITE_NAME = 'איפכא'

// Placeholder until the production domain is known; og:image URLs are resolved against it
export const SITE_URL = 'http://localhost:3000'

// 1200x630 crops of each page's hero, generated into public/og
export const OG_IMAGES = {
  home: '/og/home.jpg',
  vision: '/og/vision.jpg',
  contentLibrary: '/og/content-library.jpg',
  workshops: '/og/workshops.jpg',
  partners: '/og/partners.jpg',
}

// Next replaces (not merges) openGraph/twitter per page, so each page builds the full set here
export function pageMetadata(
  title: string,
  description: string,
  image: string = OG_IMAGES.home,
): Metadata {
  const images = [{ url: image, width: 1200, height: 630, alt: title }]
  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    openGraph: {
      title,
      description,
      siteName: SITE_NAME,
      locale: 'he_IL',
      type: 'website',
      images,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images,
    },
  }
}
