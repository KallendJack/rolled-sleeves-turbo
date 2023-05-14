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
    title: 'Projects',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    filters: [
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
    const projects = await getAllProjects()

    return (
        <>
            <ProjectStoreInitializer projects={projects} />
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <ProjectsContent {...content} />
        </>
    )
}
