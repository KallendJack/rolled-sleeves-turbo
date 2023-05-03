import type { Asset, Entry, EntryFields } from 'contentful'

export interface KitchenFields {
    type: 'modern' | 'traditional'
    name: EntryFields.Symbol
    slug: EntryFields.Symbol
    description: EntryFields.RichText
    style: 'contemporary' | 'other'
    doorType: 'lay-on' | 'other'
    handleless: EntryFields.Boolean
    priceRange: '£' | '££' | '£££' | '££££' | '£££££'
    stockedColours: EntryFields.Symbol[]
    otherColours: EntryFields.Symbol[]
    images: Asset[]
}

export type Kitchen = Entry<KitchenFields>
