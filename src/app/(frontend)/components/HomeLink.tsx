'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { ComponentProps } from 'react'

// Link to the home page; on the home page itself Next.js ignores the click, so scroll to the top instead
export function HomeLink({ onClick, ...props }: Omit<ComponentProps<typeof Link>, 'href'>) {
  const pathname = usePathname()

  return (
    <Link
      {...props}
      href="/"
      onClick={(event) => {
        onClick?.(event)
        if (pathname === '/') {
          event.preventDefault()
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }
      }}
    />
  )
}
