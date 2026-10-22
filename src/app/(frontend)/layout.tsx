import React from 'react'
import './styles.css'
import { AdminBarProvider } from './components/AdminBarProvider'
import { Footer } from './components/Footer'
import { Nav } from './components/Nav'
import { arbel, arbelStencil, eshkolita } from './fonts'
import { pageMetadata } from './seo'

export const metadata = pageMetadata(
  'איפכא',
  'הבית למורים והמורות שרוצים להתנסות בעיצוב מהלכי הוראה ולחלום בגדול וביחד. כאן בונים ומתנסים. קהילת המורים והמנהלים של פסגת זאב.',
)

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html
      lang="he"
      dir="rtl"
      className={`${arbel.variable} ${arbelStencil.variable} ${eshkolita.variable}`}
    >
      <body>
        <AdminBarProvider>
          <Nav />
          <main>{children}</main>
          <Footer />
        </AdminBarProvider>
      </body>
    </html>
  )
}
