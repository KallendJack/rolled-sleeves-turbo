'use client'

import { useRef } from 'react'

import { useKitchens } from 'stores/kitchen'
import type { Kitchen } from 'types/kitchen'

type KitchenStoreInitializerProps = {
    kitchens?: Kitchen[]
    kitchen?: Kitchen
}

const KitchenStoreInitializer = (props: KitchenStoreInitializerProps) => {
    const { kitchens = [], kitchen = null } = props

    const initialized = useRef(false)

    if (!initialized.current) {
        useKitchens.setState({ kitchens, kitchen })
        initialized.current = true
    }

    return null
}

export default KitchenStoreInitializer
