import type { Asset, Entry, EntryFields } from 'contentful'

export interface KitchenFields {
    type: 'modern' | 'traditional'
    name: EntryFields.Symbol
    slug: EntryFields.Symbol
    description: EntryFields.RichText
    atAGlance: EntryFields.RichText
    stockedColours: EntryFields.Symbol[]
    otherColours: EntryFields.Symbol[]
    images: Asset[]
}

export type Kitchen = Entry<KitchenFields>
