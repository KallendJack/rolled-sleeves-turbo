import Breadcrumbs from 'components/breadcrumbs/Breadcrumbs'
import KitchenRangeContent from 'components/kitchen-ranges/KitchenRangeContent'
import KitchenStoreInitializer from 'components/util/KitchenStoreInitializer'
import type { KitchenRangeContentProps } from 'components/kitchen-ranges/KitchenRangeContent'
import { getAllKitchens } from 'utils/contentful/client'

export const metadata = {
    title: 'Handleless Kitchens | Garrett Kitchens',
}

const breadcrumbs = [
    { id: 1, name: 'Home', href: '/' },
    { id: 2, name: 'Kitchen Ranges', href: '/kitchen-ranges' },
    { id: 3, name: 'Handleless Kitchens', href: '/kitchen-ranges/handleless-kitchens' },
]

const content: KitchenRangeContentProps = {
    type: 'Handleless',
    title: 'Handleless Kitchens',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    filters: [
        {
            id: 'type',
            name: 'Kitchen Type',
            options: [
                { value: 'Modern', label: 'Modern' },
                { value: 'Traditional', label: 'Traditional' },
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
