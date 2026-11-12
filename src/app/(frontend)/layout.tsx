import React from 'react'
import './styles.css'
import { AdminBarProvider } from './components/AdminBarProvider'
import { Footer } from './components/Footer'
import { Nav } from './components/Nav'
import { arbel, arbelStencil, eshkolita } from './fonts'
import { pageMetadata, SITE_URL } from './seo'

const SITE_DESCRIPTION =
  'הבית למורים והמורות שרוצים להתנסות בעיצוב מהלכי הוראה ולחלום בגדול וביחד. כאן בונים ומתנסים. קהילת המורים והמנהלים של פסגת זאב.'

export const metadata = pageMetadata('איפכא', SITE_DESCRIPTION)

// Tells Google the site's name and logo (used for the site name and icon in search results)
const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      name: 'איפכא',
      url: SITE_URL,
      inLanguage: 'he-IL',
      publisher: { '@id': `${SITE_URL}/#organization` },
    },
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'איפכא',
      url: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
      description: SITE_DESCRIPTION,
      sameAs: ['https://www.instagram.com/ipcha.jlm'],
    },
  ],
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html
      lang="he"
      dir="rtl"
      className={`${arbel.variable} ${arbelStencil.variable} ${eshkolita.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <AdminBarProvider>
          <Nav />
          <main>{children}</main>
          <Footer />
        </AdminBarProvider>
      </body>
    </html>
  )
}
