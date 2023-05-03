'use-client'

import Image from 'next/image'
import Link from 'next/link'

import { ButtonLink } from 'components/button/Button'
import Brochure from 'components/brochure/Brochure'
import { Carousel } from './components/carousel/Carousel'

export const metadata = {
    title: 'Home | Garrett Kitchens',
}

const features = [
    {
        name: 'Surrey-Based',
    },
    {
        name: 'Trusted Craftsmen',
    },
    {
        name: 'Bespoke Design',
    },
]

const collections = [
    {
        name: 'Book a Survey',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-collection-01.jpg',
        imageAlt: 'Brown leather key ring with brass metal loops and rivets on wood table.',
        description: 'We will take accurate measurements and answer your initial questions.',
    },
    {
        name: 'Showroom Visit',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-collection-02.jpg',
        imageAlt: 'Natural leather mouse pad on white desk next to porcelain mug and keyboard.',
        description:
            'We will present a design scetch for you to look at and pick your kitchen colours, materials and finishes.',
    },
    {
        name: 'Finalise Design',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-collection-03.jpg',
        imageAlt:
            'Person placing task list card into walnut card holder next to felt carrying case on leather desk pad.',
        description:
            'We will send your personalised design and quote, and go over the finer details.',
    },
    {
        name: 'Place Order',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-collection-03.jpg',
        imageAlt:
            'Person placing task list card into walnut card holder next to felt carrying case on leather desk pad.',
        description:
            'We will take a deposit and finalise your order, booking an installation date.',
    },
]

const testimonials = [
    {
        body: 'Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.',
        author: {
            name: 'Leslie Alexander',
            handle: 'lesliealexander',
            imageUrl:
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        body: 'Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.',
        author: {
            name: 'Leslie Alexander',
            handle: 'lesliealexander',
            imageUrl:
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        body: 'Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.',
        author: {
            name: 'Leslie Alexander',
            handle: 'lesliealexander',
            imageUrl:
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
]

export default function Page() {
    return (
        <>
            <section className="relative bg-gray-900">
                {/* Decorative image and overlay */}
                <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
                    <Image
                        fill
                        priority
                        src="/assets/home/hero/hero.png"
                        alt="Hero"
                        className="object-cover object-center w-full h-full"
                    />
                </div>
                <div aria-hidden="true" className="absolute inset-0 bg-gray-900 opacity-50" />
                <div className="relative flex flex-col items-center max-w-4xl px-6 py-32 mx-auto text-center sm:py-64 lg:px-0">
                    <h1 className="text-4xl tracking-tight text-white lg:text-6xl">
                        We Design & Install Inspiring Kitchens
                    </h1>
                    <p className="mt-4 text-xl text-white">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae fugit
                        minus a porro. Quis recusandae esse rerum reprehenderit fuga. Deleniti
                        provident.
                    </p>

                    <ButtonLink href="/contact-us" className="mt-4">
                        Start Your Journey
                    </ButtonLink>
                </div>
            </section>

            <section className="w-full bg-white">
                <dl className="grid grid-cols-3">
                    {features.map((feature) => (
                        <div
                            key={feature.name}
                            className="flex flex-col items-center justify-center gap-4 p-6 border border-gray-400 sm:flex-row"
                        >
                            <img className="w-5 h-5 bg-red-400 rounded-full" src="" alt="" />

                            <dt className="flex items-center text-base font-semibold leading-7 text-center text-gray-500 text-md md:text-lg gap-x-3">
                                {feature.name}
                            </dt>
                        </div>
                    ))}
                </dl>
            </section>

            <section
                aria-labelledby="comfort-heading"
                className="px-4 py-24 mx-auto max-w-7xl md:px-6 lg:px-8"
            >
                <div className="relative px-6 lg:px-16">
                    <div className="relative flex flex-col items-center max-w-4xl mx-auto text-center">
                        <h2
                            id="comfort-heading"
                            className="text-2xl tracking-tight text-gray-900 sm:text-4xl"
                        >
                            Do you feel like your kitchen is missing something? Missing your peronal
                            touch? Missing fun?
                        </h2>
                        <p className="mt-3 text-lg text-grey-500">
                            We understand most kitchens are uninspiring which is why we guide and
                            empower our customers to be bold with their decisions and love their
                            unique new kitchens.
                        </p>
                        <ButtonLink href="/blog" className="mt-4 w-fit">
                            Start Your Journey
                        </ButtonLink>
                    </div>
                </div>
            </section>

            <section
                aria-labelledby="collection-heading"
                className="max-w-4xl px-4 pb-24 mx-auto md:px-6 lg:max-w-7xl lg:px-8"
            >
                <div className="flex flex-col justify-between md:items-end md:flex-row">
                    <div className="md:w-3/5">
                        <h2
                            id="collection-heading"
                            className="text-2xl tracking-tight text-gray-900"
                        >
                            Achieve your dream kitchen in 4 easy steps
                        </h2>

                        <p className="mt-4 text-base text-gray-500">
                            Our simple 4 step process offers our customers a stress-free journey in
                            achieving their dream kitchen, unique to their desires.
                        </p>
                    </div>

                    <ButtonLink href="/learn-more" className="mt-4 w-fit h-fit">
                        Start Your Journey <span aria-hidden="true">&rarr;</span>
                    </ButtonLink>
                </div>

                <div className="mt-10 space-y-12 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-8 sm:space-y-0">
                    {collections.map((collection) => (
                        <Link
                            key={collection.name}
                            href={collection.href}
                            className="block text-center group"
                        >
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

                            <div className="h-40 border-b border-gray-400 border-x">
                                <h3 className="pt-4 text-xl text-gray-900 sm:text-base">
                                    {collection.name}
                                </h3>

                                <p className="px-8 mt-2 text-gray-500 sm:text-sm">
                                    {collection.description}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            <section className="w-full bg-white">
                <dl className="grid grid-cols-3">
                    {features.map((feature) => (
                        <div
                            key={feature.name}
                            className="flex flex-col items-center justify-center gap-4 p-6 border border-gray-400 sm:flex-row"
                        >
                            <img className="w-5 h-5 bg-red-400 rounded-full" src="" alt="" />

                            <dt className="flex items-center text-base font-semibold leading-7 text-center text-gray-500 text-md md:text-lg gap-x-3">
                                {feature.name}
                            </dt>
                        </div>
                    ))}
                </dl>
            </section>

            <section
                aria-labelledby="collection-heading"
                className="w-full max-w-4xl px-4 py-12 mx-auto lg:py-24 md:px-6 lg:max-w-7xl lg:px-8"
            >
                <div className="flex flex-col items-start justify-between gap-12 md:flex-row">
                    <div className="w-full md:w-1/2">
                        <img
                            src="/assets/home/kitchen-brochure.png"
                            alt="Brochure"
                            className="object-cover h-full"
                        />
                    </div>

                    <div className="w-full space-y-4 md:w-1/2">
                        <h3 className="text-2xl text-gray-900 lg:text-4xl lg:mb-8">
                            Build a Kitchen That You&apos;ll Love
                        </h3>

                        <ol className="p-4 space-y-2 text-lg list-disc list-inside text-gray-500 lg:text-xl md:space-y-6">
                            <li>A kitchen that you feel happy in</li>
                            <li>A kitchen that you love to cook in</li>
                            <li>A kitchen you feel proud of</li>
                            <li>A kitchen that your friends envy</li>
                            <li>A kitchen that you feel happy in</li>
                            <li>A kitchen that&apos;s yours</li>
                        </ol>

                        <ButtonLink href="/learn-more" className=" w-fit">
                            Start Your Journey
                        </ButtonLink>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-white">
                <div className="px-6 mx-auto max-w-7xl lg:px-8">
                    <h2 className="text-lg font-semibold leading-8 text-center text-gray-900">
                        Trusted by the worlds most innovative teams
                    </h2>
                    <div className="grid items-center max-w-lg grid-cols-4 mx-auto mt-10 gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                        <Image
                            className="object-contain w-full col-span-2 max-h-12 lg:col-span-1"
                            src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
                            alt="Transistor"
                            width={158}
                            height={48}
                        />
                        <Image
                            className="object-contain w-full col-span-2 max-h-12 lg:col-span-1"
                            src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
                            alt="Reform"
                            width={158}
                            height={48}
                        />
                        <Image
                            className="object-contain w-full col-span-2 max-h-12 lg:col-span-1"
                            src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
                            alt="Tuple"
                            width={158}
                            height={48}
                        />
                        <Image
                            className="object-contain w-full col-span-2 max-h-12 sm:col-start-2 lg:col-span-1"
                            src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
                            alt="SavvyCal"
                            width={158}
                            height={48}
                        />
                        <Image
                            className="object-contain w-full col-span-2 col-start-2 max-h-12 sm:col-start-auto lg:col-span-1"
                            src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
                            alt="Statamic"
                            width={158}
                            height={48}
                        />
                    </div>
                </div>
            </section>

            <section className="w-full max-w-4xl px-4 py-12 mx-auto lg:py-24 md:px-6 lg:max-w-7xl lg:px-8">
                <div className="flex flex-col">
                    <h2 id="collection-heading" className="text-2xl tracking-tight text-gray-900">
                        Testimonials
                    </h2>

                    <Carousel></Carousel>

                    <ButtonLink href="/contact-us" className="mt-8 w-fit self-center">
                        Start Your Journey
                    </ButtonLink>
                </div>
            </section>

            <Brochure
                title="Planning your dream kitchen can be daunting."
                image="/assets/home/kitchen-brochure.png"
                description={`With our essential kitchen planning guide, it doesn't have to
                be. We'll walk you through some of our customer's commonly
                asked questions and guide you through our process of creating your
                very own unique kitchen.`}
                button={<ButtonLink href="/learn-more">Download Guide</ButtonLink>}
            />
        </>
    )
}
