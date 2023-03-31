import Breadcrumbs from 'components/breadcrumbs/Breadcrumbs'
import KitchenRangeContent from 'components/kitchen-ranges/KitchenRangeContent'

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
    products: [
        {
            id: 1,
            name: 'Basic Tee 8-Pack',
            href: '#',
            price: '$256',
            description:
                'Get the full lineup of our Basic Tees. Have a fresh shirt all week, and an extra for laundry day.',
            options: '8 colors',
            imageSrc: '/assets/home/hero/hero.png',
            imageAlt:
                'Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.',
        },
        {
            id: 2,
            name: 'Basic Tee',
            href: '#',
            price: '$32',
            description: 'Look like a visionary CEO and wear the same black t-shirt every day.',
            options: 'Black',
            imageSrc: '/assets/home/hero/hero.png',
            imageAlt: 'Front of plain black t-shirt.',
        },
        {
            id: 3,
            name: 'Basic Tee 8-Pack',
            href: '#',
            price: '$256',
            description:
                'Get the full lineup of our Basic Tees. Have a fresh shirt all week, and an extra for laundry day.',
            options: '8 colors',
            imageSrc: '/assets/home/hero/hero.png',
            imageAlt:
                'Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.',
        },
        {
            id: 4,
            name: 'Basic Tee',
            href: '#',
            price: '$32',
            description: 'Look like a visionary CEO and wear the same black t-shirt every day.',
            options: 'Black',
            imageSrc: '/assets/home/hero/hero.png',
            imageAlt: 'Front of plain black t-shirt.',
        },
    ],
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

export default function Page() {
    return (
        <>
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <KitchenRangeContent {...content} />
        </>
    )
}
