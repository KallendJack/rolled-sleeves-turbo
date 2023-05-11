import Link from 'next/link'

type BreadcrumbsProps = {
    breadcrumbs: {
        id: number
        name: string
        href: string
    }[]
}

export default function Breadcrumbs(props: BreadcrumbsProps) {
    const { breadcrumbs } = props

    return (
        <div className="bg-brand-primaryBg">
            <nav aria-label="Breadcrumb" className="px-4 mx-auto md:px-6 max-w-7xl lg:px-8">
                <ol role="list" className="flex items-center py-4 space-x-4">
                    {breadcrumbs.slice(0, -1).map((breadcrumb) => (
                        <li key={breadcrumb.id}>
                            <div className="flex items-center">
                                <Link
                                    href={breadcrumb.href}
                                    className="mr-4 text-xs font-medium text-white md:text-sm hover:underline"
                                >
                                    {breadcrumb.name}
                                </Link>
                                <svg
                                    viewBox="0 0 6 20"
                                    aria-hidden="true"
                                    className="w-auto h-5 text-gray-300"
                                >
                                    <path
                                        d="M4.878 4.34H3.551L.27 16.532h1.327l3.281-12.19z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </div>
                        </li>
                    ))}
                    <li className="text-xs md:text-sm">
                        <Link
                            href={breadcrumbs[breadcrumbs.length - 1].href}
                            aria-current="page"
                            className="font-medium text-white hover:underline"
                        >
                            {breadcrumbs[breadcrumbs.length - 1].name}
                        </Link>
                    </li>
                </ol>
            </nav>
        </div>
    )
}
