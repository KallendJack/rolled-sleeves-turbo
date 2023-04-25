import Image from 'next/image'
import Link from 'next/link'

import { ButtonLink } from 'components/button/Button'

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
                            className="flex flex-col items-center justify-center gap-4 p-6 border border-gray-900 sm:flex-row"
                        >
                            <img className="w-5 h-5 bg-red-400 rounded-full" src="" alt="" />

                            <dt className="flex items-center text-base font-semibold leading-7 text-center text-gray-600 text-md md:text-lg gap-x-3">
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
                        <p className="mt-3 text-lg text-grey-800">
                            We understand most kitchens are uninspiring which is why we guide and
                            empower our customers to be bold with their decisions and love their
                            unique new kitchens.
                        </p>
                        <Button href="/blog" className="mt-4 w-fit">
                            Start Your Journey
                        </Button>
                    </div>
                </div>
            </section>

            <section
                aria-labelledby="collection-heading"
                className="max-w-4xl px-4 pb-24 mx-auto md:px-6 lg:max-w-7xl lg:px-8"
            >
                <div className="flex flex-col items-end justify-between md:flex-row">
                    <div className="w-3/5">
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
                            className="flex flex-col items-center justify-center gap-4 p-6 border border-gray-900 sm:flex-row"
                        >
                            <img className="w-5 h-5 bg-red-400 rounded-full" src="" alt="" />

                            <dt className="flex items-center text-base font-semibold leading-7 text-center text-gray-600 text-md md:text-lg gap-x-3">
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
                            Build a Kitchen That You'll Love
                        </h3>

                        <ol className="p-4 space-y-2 text-lg list-disc list-inside lg:text-xl md:space-y-6">
                            <li>A kitchen that you feel happy in</li>
                            <li>A kitchen that you love to cook in</li>
                            <li>A kitchen you feel proud of</li>
                            <li>A kitchen that your friends envy</li>
                            <li>A kitchen that you feel happy in</li>
                            <li>A kitchen that's yours</li>
                        </ol>

                        <ButtonLink href="/learn-more" className=" w-fit">
                            Start Your Journey
                        </ButtonLink>
                    </div>
                </div>
            </section>

            <section className="px-4 py-24 mx-auto max-w-7xl md:px-6 sm:pb-32 lg:px-8">
                <div className="pb-20 bg-brand-primaryBg sm:pb-24 xl:pb-0">
                    <div className="flex flex-col items-center px-6 mx-auto max-w-7xl gap-x-8 gap-y-10 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">
                        <div className="w-full max-w-2xl -mt-8 xl:-mb-8 xl:w-96 xl:flex-none">
                            <div className="relative aspect-[2/1] h-full lg:-mx-8 xl:mx-0 xl:aspect-auto">
                                <div className="absolute inset-0 object-cover w-full h-full shadow-2xl xl:w-1/2 rounded-2xl bg-brand-primaryBg">
                                    <Image
                                        fill
                                        src="/assets/home/kitchen-brochure.png"
                                        alt="Brochure"
                                        className="object-cover rounded-2xl"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:pr-8 xl:pl-40 xl:py-24">
                            <figure className="relative isolate">
                                <div className="leading-8 text-white sm:leading-9">
                                    <h2 className="mb-8 text-3xl tracking-tight sm:text-4xl">
                                        Kitchen Brochure
                                    </h2>
                                    <p className="text-xl">
                                        Gravida quam mi erat tortor neque molestie. Auctor aliquet
                                        at porttitor a enim nunc suscipit tincidunt nunc. Et non
                                        lorem tortor posuere. Nunc eu scelerisque interdum eget
                                        tellus non nibh scelerisque bibendum.
                                    </p>
                                    <ButtonLink href="/learn-more">Request a Brochure</ButtonLink>
                                </div>
                            </figure>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
