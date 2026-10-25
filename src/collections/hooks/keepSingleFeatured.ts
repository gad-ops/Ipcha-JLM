import type { CollectionAfterChangeHook } from 'payload'

// Only one workshop can be featured on the home page — featuring one un-features the rest
export const keepSingleFeatured: CollectionAfterChangeHook = async ({ doc, previousDoc, req, collection }) => {
  if (!doc.featuredOnHome || previousDoc?.featuredOnHome) return doc

  await req.payload.update({
    collection: collection.slug as 'workshops',
    where: {
      and: [{ id: { not_equals: doc.id } }, { featuredOnHome: { equals: true } }],
    },
    data: { featuredOnHome: false },
    req,
  })

  return doc
}
