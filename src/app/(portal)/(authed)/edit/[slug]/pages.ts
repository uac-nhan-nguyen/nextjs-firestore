import type { JSONSchema4 } from 'json-schema'


export const PAGES: { [slug: string]: JSONSchema4 } = {
    'home': {
        type: 'object',
        properties: {
            'title': { type: 'string' }
        }
    }
}