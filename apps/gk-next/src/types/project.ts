import type { Asset, Entry, EntryFields } from 'contentful'

export interface ProjectFields {
    type: ('Handleless' | 'In-Frame' | 'Modern' | 'Traditional')[]
    name: EntryFields.Symbol
    slug: EntryFields.Symbol
    shortDescription: EntryFields.RichText
    description: EntryFields.RichText
    kitchenStyle?: EntryFields.Symbol
    kitchenStyleLink?: EntryFields.Symbol
    doorType?: EntryFields.Symbol
    cabinetFinish?: EntryFields.Symbol
    worksurfaceMaterial?: EntryFields.Symbol
    appliances?: EntryFields.Symbol
    priceGroup: '£' | '££' | '£££' | '££££' | '£££££'
    coloursUsed?: EntryFields.Object
    finishes?: Asset[]
    images: Asset[]
    videos?: EntryFields.Symbol[]
}

export type Project = Entry<ProjectFields>
