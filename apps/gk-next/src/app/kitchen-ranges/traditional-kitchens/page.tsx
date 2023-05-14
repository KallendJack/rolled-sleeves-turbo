import Breadcrumbs from 'components/breadcrumbs/Breadcrumbs'
import KitchenRangeContent from 'components/kitchen-ranges/KitchenRangeContent'
import KitchenStoreInitializer from 'components/util/KitchenStoreInitializer'
import type { KitchenRangeContentProps } from 'components/kitchen-ranges/KitchenRangeContent'
import { getAllKitchens } from 'utils/contentful/client'

export const metadata = {
    title: 'Traditional Kitchens | Garrett Kitchens',
}

const breadcrumbs = [
    { id: 1, name: 'Home', href: '/' },
    { id: 2, name: 'Kitchen Ranges', href: '/kitchen-ranges' },
    { id: 3, name: 'Traditional Kitchens', href: '/kitchen-ranges/traditional-kitchens' },
]

const content: KitchenRangeContentProps = {
    type: 'Traditional',
    title: 'Traditional Kitchens',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    filters: [
        {
            id: 'type',
            name: 'Kitchen Type',
            options: [
                { value: 'Traditional', label: 'Traditional' },
                { value: 'Modern', label: 'Modern' },
                { value: 'Handleless', label: 'Handleless' },
                { value: 'In-Frame', label: 'In-Frame' },
            ],
        },
        {
            id: 'priceGroup',
            name: 'Price Group',
            options: [
                { value: '£', label: '£' },
                { value: '££', label: '££' },
                { value: '£££', label: '£££' },
                { value: '££££', label: '££££' },
                { value: '£££££', label: '£££££' },
            ],
        },
    ],
}

export default async function Page() {
    const kitchens = await getAllKitchens()

    return (
        <>
            <KitchenStoreInitializer kitchens={kitchens} />
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <KitchenRangeContent {...content} />
        </>
    )
}
