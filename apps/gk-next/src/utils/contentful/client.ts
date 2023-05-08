import { createClient } from 'contentful'

import { useKitchens } from 'stores/kitchen'
import { useProjects } from 'stores/projects'
import type { Project } from 'types/project'
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

export const getAllProjects = async () => {
    const res = await client.getEntries({
        content_type: 'project',
    })

    if (!res) {
        throw new Error('Failed to fetch data')
    }

    const projects = res.items

    useProjects.setState({ projects: projects as Project[] })

    return projects as Project[]
}

export const getProjectBySlug = async (slug: string) => {
    const res = await client.getEntries({
        content_type: 'project',
        'fields.slug': slug,
    })

    if (!res) {
        throw new Error('Failed to fetch data')
    }

    const project = res.items[0]

    useProjects.setState({ project: project as Project })

    return project as Project
}
