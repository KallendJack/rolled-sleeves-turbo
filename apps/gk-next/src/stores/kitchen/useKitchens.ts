import { create } from 'zustand'

import type { Kitchen } from 'types/kitchen'
import { hasCommonArrayElements } from 'utils/general/hasCommonArrayElements'

type useKitchensProps = {
    kitchens: Kitchen[]
    kitchen: Kitchen
    getKitchensByType: (
        type: 'Modern' | 'Traditional' | 'Handleless' | 'In-Frame' | 'All',
    ) => Kitchen[]
    getFilteredKitchens: (
        type: 'Modern' | 'Traditional' | 'Handleless' | 'In-Frame' | 'All',
        filters?: {
            type?: 'Modern' | 'Traditional' | 'Handleless' | 'In-Frame'[]
            priceGroup?: '£' | '££' | '£££' | '££££' | '£££££'[]
        },
    ) => Kitchen[]
}

export const useKitchens = create<useKitchensProps>((set, get) => ({
    kitchens: [],
    kitchen: null,
    getKitchensByType: (type) => {
        if (type === 'All') return get().kitchens

        return get().kitchens.filter((kitchen) => kitchen.fields.type.includes(type))
    },
    getFilteredKitchens: (type, filters) => {
        return get()
            .getKitchensByType(type)
            .filter((kitchen) => {
                const typeFilters =
                    filters.type?.length > 0
                        ? filters.type
                        : ['Modern', 'Traditional', 'Handleless', 'In-Frame', 'All']

                const priceGroupFilters =
                    filters.priceGroup?.length > 0
                        ? filters.priceGroup
                        : ['£', '££', '£££', '££££', '£££££']

                return (
                    hasCommonArrayElements(kitchen.fields.type, typeFilters) &&
                    priceGroupFilters.includes(kitchen.fields.priceGroup)
                )
            })
    },
}))
