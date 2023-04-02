import Breadcrumbs from 'components/breadcrumbs/Breadcrumbs'
import KitchenRangeContent from 'components/kitchen-ranges/KitchenRangeContent'
import { Kitchen } from 'types/kitchen'
import { getAllKitchens } from 'utils/contentful/client'

export const metadata = {
    title: 'Traditional Kitchens | Garrett Kitchens',
}

const breadcrumbs = [
    { id: 1, name: 'Home', href: '/' },
    { id: 2, name: 'Kitchen Ranges', href: '/kitchen-ranges' },
    { id: 3, name: 'Traditional Kitchens', href: '/kitchen-ranges/traditional-kitchens' },
]

const content = {
    title: 'Traditional Kitchens',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    filters: [
        {
            id: 'kitchen-type',
            name: 'Kitchen Type',
            options: [
                { value: 'traditional', label: 'Traditional' },
                { value: 'modern', label: 'Modern' },
                { value: 'door', label: 'Door' },
                { value: 'handleless', label: 'Handleless' },
            ],
        },
        {
            id: 'price',
            name: 'Price',
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
    const kitchens: Kitchen[] = await getAllKitchens()

    return (
        <>
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <KitchenRangeContent kitchens={kitchens} {...content} />
        </>
    )
}
