import type { Asset, Entry, EntryFields } from 'contentful'

export interface KitchenFields {
    type: 'modern' | 'traditional'
    name: EntryFields.Symbol
    description: EntryFields.Text
    image: Asset
    slug: EntryFields.Symbol
}

export type Kitchen = Entry<KitchenFields>
