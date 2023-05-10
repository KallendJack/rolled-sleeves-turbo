import type { Asset, Entry, EntryFields } from 'contentful'

export interface PostFields {
    title: EntryFields.Symbol
    slug: EntryFields.Symbol
    shortText: EntryFields.RichText
    text: EntryFields.RichText
    images: Asset[]
}

export type Post = Entry<PostFields>
