import Image from 'next/image'
import Link from 'next/link'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Breadcrumbs from 'components/breadcrumbs/Breadcrumbs'
import PostStoreInitializer from 'components/util/PostStoreInitializer'
import { getAllPosts } from 'utils/contentful/client'

export const metadata = {
    title: 'Blog | Garrett Kitchens',
}

const breadcrumbs = [
    { id: 1, name: 'Home', href: '/' },
    { id: 2, name: 'Blog', href: '/blog' },
]

export default async function Page() {
    const posts = await getAllPosts()

    return (
        <>
            <PostStoreInitializer posts={posts} />
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <div className="py-sm lg:py-lg">
                <div className="px-6 mx-auto max-w-7xl lg:px-8">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Check Out Our Blog
                        </h2>
                        <p className="mt-2 text-lg leading-8 text-gray-600">
                            Learn more about our kitchens, our process, and our company.
                        </p>
                    </div>
                    <div className="grid max-w-2xl grid-cols-1 mx-auto mt-16 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {posts.map((post, index) => (
                            <article key={index} className="flex flex-col items-start">
                                <div className="relative w-full">
                                    <div className="aspect-[16/9] w-full bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2] relative">
                                        <Image
                                            src={`https:${post.fields.images[0].fields.file.url}`}
                                            alt={post.fields.images[0].fields.title}
                                            fill
                                        />
                                    </div>
                                    <div className="absolute inset-0 ring-1 ring-inset ring-gray-900/10" />
                                </div>
                                <div className="max-w-xl">
                                    <div className="relative group">
                                        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                            <Link href={`/blog/${post.fields.slug}`}>
                                                <span className="absolute inset-0" />
                                                {post.fields.title}
                                            </Link>
                                        </h3>
                                        <div className="mt-5 text-sm leading-6 text-gray-600 line-clamp-3">
                                            {documentToReactComponents(
                                                post.fields.shortText as any,
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
