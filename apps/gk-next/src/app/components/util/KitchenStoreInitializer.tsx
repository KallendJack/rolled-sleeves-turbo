'use client'

import { useRef } from 'react'

import { useKitchens } from 'stores/kitchen'
import type { Kitchen } from 'types/kitchen'

type KitchenStoreInitializerProps = {
    kitchens: Kitchen[]
}

const KitchenStoreInitializer = (props: KitchenStoreInitializerProps) => {
    const { kitchens } = props

    const initialized = useRef(false)

    if (!initialized.current) {
        useKitchens.setState({ kitchens })
        initialized.current = true
    }

    return null
}

export default KitchenStoreInitializer
