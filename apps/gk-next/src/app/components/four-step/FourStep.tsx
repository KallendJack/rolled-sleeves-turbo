import { HTMLAttributes } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

import { ButtonLink } from 'components/button/Button'

type FourStepProps = HTMLAttributes<HTMLDivElement> & {
    flipped?: boolean
    whiteBg?: boolean
}

export default function FourStep(props: FourStepProps) {
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
                            <h4 className="text-sm font-semibold tracking-widest uppercase text-brand-secondary">
                                A Seamless Experience
                            </h4>

                            <h2
                                id="collection-heading"
                                className="text-2xl tracking-tight text-gray-900 lg:text-3xl"
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
                            className="inline-block px-6 py-3 mt-4 text-xs tracking-widest text-gray-900 uppercase transition-colors bg-white border border-gray-500 hover:text-white hover:bg-brand-primaryFocus focus:bg-brand-primaryHover"
                        >
                            Learn More
                        </button>
                    </div>

                    <div className="mt-16 space-y-12 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-8 sm:space-y-0">
                        {collections.map((collection) => (
                            <Link
                                key={collection.name}
                                href={collection.href}
                                className="relative block text-center border border-gray-400 group"
                            >
                                <div className="absolute left-0 right-0 z-50 flex items-center justify-center mx-auto text-2xl font-medium text-gray-900 bg-white border border-gray-500 rounded-full -top-7 font-body w-14 h-14">
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
                                    <h3 className="pt-4 mb-2 text-lg font-medium text-gray-900">
                                        {collection.name}
                                    </h3>

                                    <hr className="w-1/5 mx-auto border-b border-brand-primaryHover" />

                                    <p className="px-8 mt-3 text-gray-500 xl:px-6 sm:text-sm">
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
