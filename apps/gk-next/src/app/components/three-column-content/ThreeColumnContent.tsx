import { HTMLAttributes } from 'react'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'

type ThreeColumnContentProps = HTMLAttributes<HTMLDivElement> & {
    title: string
    items: {
        image: string
        title: string
        text: string
    }[]
}

export function ThreeColumnContent(props: ThreeColumnContentProps) {
    const { title, items, className = '' } = props

    return (
        <section className={twMerge('py-sm lg:py-lg', className)}>
            <div className="px-4 mx-auto md:px-6 max-w-7xl lg:px-8">
                <div className="mx-auto text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        {title}
                    </h2>
                </div>
                <div className="grid grid-cols-1 mx-auto mt-16 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {items.map((item, index) => (
                        <article key={index} className="flex flex-col items-start">
                            <div className="relative w-full">
                                <div className="aspect-[16/9] w-full bg-gray-100 sm:aspect-[2/1] lg:aspect-[3/2] relative">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="absolute inset-0 ring-1 ring-inset ring-gray-900/10" />
                            </div>
                            <div className="max-w-xl">
                                <div className="relative">
                                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">
                                        {item.title}
                                    </h3>
                                    <div className="mt-5 text-sm leading-6 text-gray-600 line-clamp-3">
                                        {item.text}
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ThreeColumnContent
