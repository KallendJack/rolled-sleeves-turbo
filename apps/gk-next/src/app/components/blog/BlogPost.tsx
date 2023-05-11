'use client'

import Image from 'next/image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import { renderOptions } from 'utils/contentful/renderOptions'
import { usePosts } from 'stores/post'

export default function BlogPost() {
    const { post } = usePosts()

    return (
        <section>
            <div className="relative bg-gray-900">
                <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
                    <Image
                        fill
                        priority
                        src={`https:${post.fields.images[0].fields.file.url}`}
                        alt={post.fields.title}
                        className="object-cover object-center w-full h-full"
                    />
                </div>
                <div aria-hidden="true" className="absolute inset-0 bg-gray-900 opacity-50" />
                <div className="relative flex flex-col items-center max-w-4xl px-6 py-32 mx-auto text-center sm:py-64 lg:px-0">
                    <h1 className="text-4xl tracking-tight text-white lg:text-6xl">
                        {post.fields.title}
                    </h1>
                </div>
            </div>
            <div className="py-sm lg:py-lg">
                <div className="mx-auto max-w-7xl">
                    <div className="mx-auto lg:mx-0">
                        <div className="px-4 md:px-6 lg:px-8">
                            {documentToReactComponents(post.fields.text as any, renderOptions)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
