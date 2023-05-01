import { createClient } from 'contentful'

import { useKitchens } from 'stores/kitchen'
import type { Kitchen } from 'types/kitchen'

export const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
})

export const getAllKitchens = async () => {
    const res = await client.getEntries({
        content_type: 'kitchen',
    })

    if (!res) {
        throw new Error('Failed to fetch data')
    }

    const kitchens = res.items

    useKitchens.setState({ kitchens: kitchens as Kitchen[] })

    return kitchens as Kitchen[]
}

export const getKitchenBySlug = async (slug: string) => {
    const res = await client.getEntries({
        content_type: 'kitchen',
        'fields.slug': slug,
    })

    if (!res) {
        throw new Error('Failed to fetch data')
    }

    const kitchen = res.items[0]

    useKitchens.setState({ kitchen: kitchen as Kitchen })

    return kitchen as Kitchen
}
