import Image from 'next/image'
import Link from 'next/link'

import { ButtonLink } from 'components/button/Button'
import { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

type FourStepSectionProps = HTMLAttributes<HTMLDivElement> & {
    flipped?: boolean
    whiteBg?: boolean
}

export default function FourStepection(props: FourStepSectionProps) {
    const { whiteBg = false, className = '' } = props

    const collections = [
        {
            number: 1,
            name: 'Book a Survey',
            href: '#',
            imageSrc: '/assets/home/Finalise.jpg',
            imageAlt: 'Brown leather key ring with brass metal loops and rivets on wood table.',
            description: 'We will take accurate measurements and answer your initial questions.',
        },
        {
            number: 2,
            name: 'Showroom Visit',
            href: '#',
            imageSrc: '/assets/home/Showroom-Visit.jpg',
            imageAlt: 'Natural leather mouse pad on white desk next to porcelain mug and keyboard.',
            description:
                'We will present a design scetch for you to look at and pick your kitchen colours, materials and finishes.',
        },
        {
            number: 3,
            name: 'Finalise Design',
            href: '#',
            imageSrc: '/assets/home/Survey.png',

            imageAlt:
                'Person placing task list card into walnut card holder next to felt carrying case on leather desk pad.',
            description:
                'We will send your personalised design and quote, and go over the finer details.',
        },
        {
            number: 4,
            name: 'Place Order',
            href: '#',
            imageSrc: '/assets/home/Place-Order.png',
            imageAlt:
                'Person placing task list card into walnut card holder next to felt carrying case on leather desk pad.',
            description:
                'We will take a deposit and finalise your order, booking an installation date.',
        },
    ]

    return (
        <section className={twMerge('', className, whiteBg ? 'bg-white' : 'bg-gray-100')}>
            <div className="w-full py-sm lg:py-lg">
                <div
                    aria-labelledby="collection-heading"
                    className="max-w-4xl px-4 mx-auto md:px-6 lg:max-w-7xl lg:px-8"
                >
                    <div className="flex flex-col justify-between md:items-end md:flex-row">
                        <div className="md:w-3/5">
                            <h4 className="text-sm font-semibold uppercase tracking-widest text-brand-secondary">
                                A Seamless Experience
                            </h4>

                            <h2
                                id="collection-heading"
                                className="text-2xl tracking-tight lg:text-3xl text-gray-900"
                            >
                                Achieve your dream kitchen in 4 easy steps
                            </h2>

                            <p className="mt-4 text-base text-gray-500">
                                Our simple 4 step process offers our customers a stress-free journey
                                in achieving their dream kitchen, unique to their desires.
                            </p>
                        </div>

                        <button
                            // href="/our-process"
                            className="mt-4 inline-block px-6 py-3 border border-gray-500 text-xs tracking-widest text-gray-900 uppercase hover:text-white bg-white hover:bg-brand-primaryFocus focus:bg-brand-primaryHover transition-colors"
                        >
                            Learn More
                        </button>
                    </div>

                    <div className="mt-16 space-y-12 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-8 sm:space-y-0">
                        {collections.map((collection) => (
                            <Link
                                key={collection.name}
                                href={collection.href}
                                className="block text-center group relative border border-gray-400"
                            >
                                <div className="absolute -top-7 left-0 right-0 text-2xl font-body font-medium mx-auto w-14 h-14 rounded-full bg-white border border-gray-500 text-gray-900 z-50 flex items-center justify-center">
                                    {collection.number}
                                </div>

                                <div
                                    aria-hidden="true"
                                    className="relative overflow-hidden aspect-h-2 aspect-w-3 lg:aspect-h-6 lg:aspect-w-7 group-hover:opacity-75"
                                >
                                    <Image
                                        fill
                                        src={collection.imageSrc}
                                        alt={collection.imageAlt}
                                        className="object-cover object-center"
                                    />
                                </div>

                                <div className="h-40 border-t border-gray-400">
                                    <h3 className="pt-4 mb-2 text-lg text-gray-900 font-medium">
                                        {collection.name}
                                    </h3>

                                    <hr className="border-b border-brand-primaryHover w-1/5 mx-auto" />

                                    <p className="px-8 xl:px-6 mt-3 text-gray-500 sm:text-sm">
                                        {collection.description}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className="flex justify-center mt-8">
                        <ButtonLink href="/learn-more" className="w-fit">
                            Start Your Journey <span aria-hidden="true">&rarr;</span>
                        </ButtonLink>
                    </div>
                </div>
            </div>
        </section>
    )
}
