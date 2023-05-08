import type { Asset, Entry, EntryFields } from 'contentful'

export interface ProjectFields {
    type: 'modern' | 'traditional'
    name: EntryFields.Symbol
    slug: EntryFields.Symbol
    shortDescription: EntryFields.RichText
    description: EntryFields.RichText
    style: 'contemporary' | 'other'
    doorType: 'lay-on' | 'other'
    handleless: EntryFields.Boolean
    priceRange: '£' | '££' | '£££' | '££££' | '£££££'
    stockedColours: EntryFields.Symbol[]
    otherColours: EntryFields.Symbol[]
    images: Asset[]
}

export type Project = Entry<ProjectFields>
