import { createClient } from 'contentful'

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

    return kitchens as any
}