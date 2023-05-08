import type { Asset, Entry, EntryFields } from 'contentful'

export interface ProjectFields {
    type: 'modern' | 'traditional'
    name: EntryFields.Symbol
    slug: EntryFields.Symbol
    shortDescription: EntryFields.RichText
    description: EntryFields.RichText
    style: 'contemporary' | 'other'
    doorType: 'lay-on' | 'other'
    cabinetFinish: EntryFields.Symbol
    worksurfaceMaterial: EntryFields.Symbol
    appliances: EntryFields.Symbol
    priceRange: '£' | '££' | '£££' | '££££' | '£££££'
    coloursUsed: EntryFields.Symbol[]
    images: Asset[]
}

export type Project = Entry<ProjectFields>
