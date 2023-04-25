import { create } from 'zustand'

import type { Kitchen } from 'types/kitchen'

type useKitchensProps = {
    kitchens: Kitchen[]
}

export const useKitchens = create<useKitchensProps>(() => ({
    kitchens: [],
}))
