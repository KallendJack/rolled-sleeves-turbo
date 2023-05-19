import type { Asset, Entry, EntryFields } from 'contentful'

export interface KitchenFields {
    type: ('Handleless' | 'In-Frame' | 'Modern' | 'Traditional')[]
    name: EntryFields.Symbol
    slug: EntryFields.Symbol
    shortDescription: EntryFields.RichText
    description: EntryFields.RichText
    kitchenStyle?: EntryFields.Symbol
    doorType?: EntryFields.Symbol
    handleless?: EntryFields.Boolean
    size?: EntryFields.Symbol
    priceGroup: '£' | '££' | '£££' | '££££' | '£££££'
    stockedColours?: EntryFields.Object
    otherColours?: EntryFields.Object
    finishes?: Asset[]
    images: Asset[]
}

export type Kitchen = Entry<KitchenFields>
