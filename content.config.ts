import { defineContentConfig, defineCollection } from '@nuxt/content'

export default defineContentConfig({
    collections: {
        policies_es: defineCollection({
            type: 'page',
            source: 'es/policies/*.md'
        }),
        policies_en: defineCollection({
            type: 'page',
            source: 'en/policies/*.md'
        })
    }
})
