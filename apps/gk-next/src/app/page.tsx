import Image from 'next/image'
import Link from 'next/link'

import Button from 'components/button/Button'

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
                <div className="relative flex flex-col items-center max-w-3xl px-6 py-32 mx-auto text-center sm:py-64 lg:px-0">
                    <h1 className="text-4xl tracking-tight text-white lg:text-6xl">
                        We Design & Install Inspiring Kitchens
                    </h1>
                    <p className="mt-4 text-xl text-white">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae fugit
                        minus a porro. Quis recusandae esse rerum reprehenderit fuga. Deleniti
                        provident.
                    </p>
                    <Button href="/learn-more">Start Your Journey</Button>
                </div>
            </section>

            <section className=" bg-white w-full">
                <dl className="grid grid-cols-3">
                    {features.map((feature) => (
                        <div
                            key={feature.name}
                            className="flex flex-col sm:flex-row justify-center gap-4 items-center border border-gray-900 p-6"
                        >
                            <img className="bg-red-400 rounded-full w-5 h-5" src="" alt="" />

                            <dt className="flex text-md md:text-lg items-center text-base font-semibold leading-7 text-center text-gray-600 gap-x-3">
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
                    <div className="relative flex flex-col items-center max-w-3xl mx-auto text-center">
                        <h2
                            id="comfort-heading"
                            className="text-2xl tracking-tight text-grey-800 sm:text-4xl"
                        >
                            Do you feel like your kitchen is missing something? Missing your peronal
                            touch? Missing fun?
                        </h2>
                        <p className="mt-3 text-lg text-grey-800">
                            We understand most kitchens are uninspiring which is why we guide and
                            empower our customers to be bold with their decisions and love their
                            unique new kitchens.
                        </p>
                        <Link
                            href="/blog"
                            className="block w-full px-8 py-3 mt-8 text-base font-medium text-white bg-brand-primary border border-transparent rounded-md hover:bg-gray-100 sm:w-auto"
                        >
                            Start Your Journey
                        </Link>
                    </div>
                </div>
            </section>

            <section
                aria-labelledby="collection-heading"
                className="max-w-3xl px-4 pb-24 mx-auto md:px-6 lg:max-w-7xl lg:px-8"
            >
                <div className="flex flex-col md:flex-row justify-between">
                    <div>
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

                    <Link
                        href="/blog"
                        className="block w-fit px-8 py-3 mt-8 text-base font-medium text-white bg-brand-primary border border-transparent rounded-md hover:bg-gray-100 sm:w-auto"
                    >
                        Find Out More
                    </Link>
                </div>

                <div className="mt-10 space-y-12 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-8 sm:space-y-0">
                    {collections.map((collection) => (
                        <Link
                            key={collection.name}
                            href={collection.href}
                            className="block group  text-center"
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

                            <div className="border-x border-b border-gray-400 h-40">
                                <h3 className="pt-4 text-xl sm:text-base font-bold text-gray-900">
                                    {collection.name}
                                </h3>

                                <p className="mt-2 sm:text-sm text-gray-500 px-8">
                                    {collection.description}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            <section className=" bg-white w-full">
                <dl className="grid grid-cols-3">
                    {features.map((feature) => (
                        <div
                            key={feature.name}
                            className="flex flex-col sm:flex-row justify-center gap-4 items-center border border-gray-900 p-6"
                        >
                            <img className="bg-red-400 rounded-full w-5 h-5" src="" alt="" />

                            <dt className="flex text-md md:text-lg items-center text-base font-semibold leading-7 text-center text-gray-600 gap-x-3">
                                {feature.name}
                            </dt>
                        </div>
                    ))}
                </dl>
            </section>

            <section className="px-4 mx-auto max-w-7xl py-24 md:px-6 lg:px-8">
                <div className="max-w-xl mx-auto text-center">
                    <h2 className="text-lg leading-8 tracking-tight text-brand-primary">
                        Testimonials
                    </h2>
                    <p className="mt-2 text-3xl tracking-tight text-gray-900 sm:text-4xl">
                        We have worked with thousands of amazing people
                    </p>
                </div>

                <div className="flow-root mx-auto mt-16 sm:mt-20 lg:mx-0 lg:max-w-none">
                    <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:inline-flex lg:columns-3">
                        {testimonials.map((testimonial) => (
                            <div
                                key={testimonial.author.handle}
                                className="pt-8 sm:inline-block sm:w-full sm:px-4"
                            >
                                <figure className="p-8 text-sm leading-6 rounded-2xl bg-gray-50">
                                    <blockquote className="text-gray-900">
                                        <p>{`“${testimonial.body}”`}</p>
                                    </blockquote>
                                    <figcaption className="flex items-center mt-6 gap-x-4">
                                        <div className="relative w-10 h-10 rounded-full bg-gray-50">
                                            <Image
                                                fill
                                                className="rounded-full"
                                                src={testimonial.author.imageUrl}
                                                alt="Testimonial Author"
                                            />
                                        </div>
                                        <div>
                                            <div className="font-semibold text-gray-900">
                                                {testimonial.author.name}
                                            </div>
                                            <div className="text-gray-600">{`@${testimonial.author.handle}`}</div>
                                        </div>
                                    </figcaption>
                                </figure>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="px-4 pb-24 mx-auto max-w-7xl md:px-6 sm:pb-32 lg:px-8">
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
                                    <Button href="/learn-more">Request a Brochure</Button>
                                </div>
                            </figure>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
