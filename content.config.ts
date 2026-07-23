import { defineContentConfig, defineCollection, property, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: {
        include: '**/*.md',
        exclude: ['blog/**']
      }
    }),
    blog: defineCollection({
      type: 'page',
      source: 'blog/**/*.md',
      schema: z.object({
        date: z.date(),
        author: z.string().optional(),
        image: z.object({
          src: property(z.string()).editor({ input: 'media' }),
          alt: z.string()
        }).optional()
      })
    })
  }
})
