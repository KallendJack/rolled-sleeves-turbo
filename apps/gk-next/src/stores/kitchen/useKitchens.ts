import { create } from 'zustand'

import type { Kitchen } from 'types/kitchen'

type useKitchensProps = {
    kitchens: Kitchen[]
    kitchen: Kitchen
    getKitchensByType: (type: 'traditional' | 'modern' | 'all') => Kitchen[]
}

export const useKitchens = create<useKitchensProps>((set, get) => ({
    kitchens: [],
    kitchen: null,
    getKitchensByType: (type) => {
        if (type === 'all') return get().kitchens

        return get().kitchens.filter((kitchen) => kitchen.fields.type === type)
    },
}))
