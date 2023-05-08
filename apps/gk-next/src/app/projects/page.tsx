import Breadcrumbs from 'components/breadcrumbs/Breadcrumbs'
import ProjectsContent from 'components/projects/ProjectsContent'
import ProjectStoreInitializer from 'components/util/ProjectStoreInitializer'
import type { ProjectsContentProps } from 'components/projects/ProjectsContent'
import { getAllProjects } from 'utils/contentful/client'

export const metadata = {
    title: 'Projects | Garrett Kitchens',
}

const breadcrumbs = [
    { id: 1, name: 'Home', href: '/' },
    { id: 2, name: 'Projects', href: '/projects' },
]

const content: ProjectsContentProps = {
    type: 'all',
    title: 'Projects',
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
    const projects = await getAllProjects()

    return (
        <>
            <ProjectStoreInitializer projects={projects} />
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <ProjectsContent {...content} />
        </>
    )
}
