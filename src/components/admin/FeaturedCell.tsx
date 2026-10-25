'use client'

import type { DefaultCellComponentProps } from 'payload'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

export function FeaturedCell({ cellData, collectionSlug, rowData }: DefaultCellComponentProps) {
  const router = useRouter()
  const [pending, setPending] = useState(false)
  const featured = cellData === true

  async function toggle(e: React.MouseEvent) {
    e.preventDefault()
    e.stopPropagation()
    setPending(true)
    try {
      await fetch(`/api/${collectionSlug}/${rowData.id}`, {
        method: 'PATCH',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ featuredOnHome: !featured }),
      })
      router.refresh()
    } finally {
      setPending(false)
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      disabled={pending}
      title={featured ? 'לחצו כדי להסיר מעמוד הבית' : 'לחצו כדי להציג בעמוד הבית'}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        border: 'none',
        borderRadius: '999px',
        padding: '4px 12px',
        fontSize: '13px',
        fontWeight: 600,
        cursor: pending ? 'wait' : 'pointer',
        opacity: pending ? 0.6 : 1,
        background: featured ? '#fde7c0' : '#f0f0f0',
        color: featured ? '#9a5b00' : '#666',
      }}
    >
      {featured ? '★ מוצג בעמוד הבית' : '☆ הצגה בעמוד הבית'}
    </button>
  )
}
