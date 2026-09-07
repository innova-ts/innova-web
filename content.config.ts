import { defineContentConfig, defineCollection } from '@nuxt/content'

export default defineContentConfig({
    collections: {
        policies: defineCollection({
            type: 'page',
            source: 'policies/*.md'
        })
    }
})
