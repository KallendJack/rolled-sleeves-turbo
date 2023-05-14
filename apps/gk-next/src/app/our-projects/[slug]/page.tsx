import Breadcrumbs from 'components/breadcrumbs/Breadcrumbs'
import ProjectContent from 'components/projects/ProjectContent'
import ProjectStoreInitializer from 'components/util/ProjectStoreInitializer'
import { getAllProjects, getProjectBySlug } from 'utils/contentful/client'

export async function generateMetadata({ params }) {
    const project = await getProjectBySlug(params.slug)

    return {
        title: `${project.fields.name} | Garrett Kitchens`,
        description: project.fields.shortDescription,
    }
}

const breadcrumbs = [
    { id: 1, name: 'Home', href: '/' },
    { id: 2, name: 'Our Projects', href: '/our-projects' },
]

export default async function Page({ params }: { params: { slug: string } }) {
    const project = await getProjectBySlug(params.slug)
    const projects = await getAllProjects()

    return (
        <>
            <ProjectStoreInitializer projects={projects} project={project} />
            <Breadcrumbs
                breadcrumbs={[
                    ...breadcrumbs,
                    {
                        id: 3,
                        name: project.fields.name,
                        href: `/our-projects/${project.fields.slug}`,
                    },
                ]}
            />
            <ProjectContent />
        </>
    )
}
