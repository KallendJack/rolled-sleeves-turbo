import { create } from 'zustand'

import type { Kitchen } from 'types/kitchen'

type useKitchensProps = {
    kitchens: Kitchen[]
    getKitchensByType: (type: 'traditional' | 'modern') => Kitchen[]
}

export const useKitchens = create<useKitchensProps>((set, get) => ({
    kitchens: [],
    getKitchensByType: (type) => {
        return get().kitchens.filter((kitchen) => kitchen.fields.type === type)
    },
}))
