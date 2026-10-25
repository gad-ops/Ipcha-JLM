import type { CollectionConfig } from 'payload'

import { isAdmin } from '../access/isAdmin'
import { revalidatePaths } from './hooks/revalidatePaths'
import { keepSingleFeatured } from './hooks/keepSingleFeatured'

const revalidate = revalidatePaths(['/workshops', '/'])

export const Workshops: CollectionConfig = {
  slug: 'workshops',
  labels: {
    singular: 'סדנה',
    plural: 'סדנאות',
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'date', 'location', 'status', 'featuredOnHome'],
    components: {
      edit: {
        beforeDocumentControls: [
          '/components/admin/BackToListButton#BackToListButton',
          '/components/admin/LivePreview#WorkshopLivePreview',
        ],
      },
    },
  },
  access: {
    read: () => true,
    create: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  hooks: {
    afterChange: [keepSingleFeatured, revalidate.afterChange],
    afterDelete: [revalidate.afterDelete],
  },
  fields: [
    {
      name: 'status',
      label: 'סטטוס',
      type: 'select',
      options: [
        { label: 'פורסם', value: 'published' },
        { label: 'טיוטה', value: 'draft' },
      ],
      defaultValue: 'published',
      required: true,
      admin: {
        position: 'sidebar',
        components: {
          Cell: '/components/admin/StatusCell#StatusCell',
        },
      },
    },
    {
      name: 'featuredOnHome',
      label: 'תצוגה בעמוד הבית',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        position: 'sidebar',
        description: 'רק סדנה אחת מוצגת בעמוד הבית. אם אף סדנה לא מסומנת, תוצג האחרונה שפורסמה.',
        components: {
          Cell: '/components/admin/FeaturedCell#FeaturedCell',
        },
      },
    },
    {
      name: 'image',
      label: 'תמונה',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'preTitle',
      label: 'כותרת על',
      type: 'text',
    },
    {
      name: 'title',
      label: 'כותרת',
      type: 'text',
      required: true,
      admin: {
        components: {
          Field: '/components/admin/LargeTitleField#LargeTitleField',
        },
      },
    },
    {
      name: 'description',
      label: 'תיאור',
      type: 'textarea',
      required: true,
    },
    {
      name: 'date',
      label: 'תאריך',
      type: 'text',
      required: true,
      admin: {
        placeholder: 'לדוגמה: 8.12.26',
      },
    },
    {
      name: 'hours',
      label: 'שעות',
      type: 'text',
    },
    {
      name: 'location',
      label: 'מיקום',
      type: 'text',
    },
    {
      name: 'signupUrl',
      label: 'לינק חיצוני להרשמה',
      type: 'text',
      required: true,
    },
    {
      name: 'bubbleText',
      label: 'בועה',
      type: 'text',
      maxLength: 40,
    },
  ],
}
