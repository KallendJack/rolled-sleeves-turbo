import type { Asset, Entry, EntryFields } from 'contentful'

export interface KitchenFields {
    type: 'modern' | 'traditional'
    name: EntryFields.Symbol
    description: EntryFields.RichText
    image: Asset
    slug: EntryFields.Symbol
}

export type Kitchen = Entry<KitchenFields>
