import Breadcrumbs from 'components/breadcrumbs/Breadcrumbs'
import KitchenContent from 'components/kitchen-ranges/KitchenContent'
import KitchenStoreInitializer from 'components/util/KitchenStoreInitializer'
import { getAllKitchens, getKitchenBySlug } from 'utils/contentful/client'

export async function generateMetadata({ params }) {
    const kitchen = await getKitchenBySlug(params.slug)

    return {
        title: `${kitchen.fields.name} | Garrett Kitchens`,
        description: kitchen.fields.shortDescription,
    }
}

const breadcrumbs = [
    { id: 1, name: 'Home', href: '/' },
    { id: 2, name: 'Kitchen Ranges', href: '/kitchen-ranges' },
    { id: 3, name: 'Handleless Kitchens', href: '/kitchen-ranges/handleless-kitchens' },
]

export default async function Page({ params }: { params: { slug: string } }) {
    const kitchen = await getKitchenBySlug(params.slug)
    const kitchens = await getAllKitchens()

    return (
        <>
            <KitchenStoreInitializer kitchens={kitchens} kitchen={kitchen} />
            <Breadcrumbs
                breadcrumbs={[
                    ...breadcrumbs,
                    {
                        id: 4,
                        name: kitchen.fields.name,
                        href: `/kitchen-ranges/handleless-kitchens/${kitchen.fields.slug}`,
                    },
                ]}
            />
            <KitchenContent type="Handleless" />
        </>
    )
}
