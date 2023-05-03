import Breadcrumbs from 'components/breadcrumbs/Breadcrumbs'
import KitchenContent from 'components/kitchen-ranges/KitchenContent'
import KitchenStoreInitializer from 'components/util/KitchenStoreInitializer'
import { getAllKitchens, getKitchenBySlug } from 'utils/contentful/client'

export const metadata = {
    title: 'Modern Kitchens | Garrett Kitchens',
}

const breadcrumbs = [
    { id: 1, name: 'Home', href: '/' },
    { id: 2, name: 'Kitchen Ranges', href: '/kitchen-ranges' },
    { id: 3, name: 'Modern Kitchens', href: '/kitchen-ranges/modern-kitchens' },
]

export default async function Page({ params }: { params: { slug: string } }) {
    const kitchen = await getKitchenBySlug(params.slug)
    const kitchens = await getAllKitchens()

    return (
        <>
            <KitchenStoreInitializer kitchens={kitchens} kitchen={kitchen} />
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <KitchenContent />
        </>
    )
}
