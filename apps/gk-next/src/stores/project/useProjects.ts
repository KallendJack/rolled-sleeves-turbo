import { create } from 'zustand'

import type { Project } from 'types/project'

type useProjectsProps = {
    projects: Project[]
    project: Project
    getFilteredProjects: (filters?: {
        priceGroup?: '£' | '££' | '£££' | '££££' | '£££££'[]
    }) => Project[]
}

export const useProjects = create<useProjectsProps>((set, get) => ({
    projects: [],
    project: null,
    getFilteredProjects: (filters) => {
        return get().projects.filter((kitchen) => {
            const priceGroupFilters =
                filters.priceGroup?.length > 0
                    ? filters.priceGroup
                    : ['£', '££', '£££', '££££', '£££££']

            return priceGroupFilters?.includes(kitchen.fields.priceGroup)
        })
    },
}))
