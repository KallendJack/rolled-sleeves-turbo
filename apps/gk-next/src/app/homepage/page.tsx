import Image from 'next/image'

import Button from 'components/button/Button'

const collections = [
    {
        name: 'Winslow',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-collection-01.jpg',
        imageAlt: 'Brown leather key ring with brass metal loops and rivets on wood table.',
        description:
            'Keep your phone, keys, and wallet together, so you can lose everything at once.',
    },
    {
        name: 'Winslow',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-collection-02.jpg',
        imageAlt: 'Natural leather mouse pad on white desk next to porcelain mug and keyboard.',
        description: 'The rest of the house will still be a mess, but your desk will look great.',
    },
    {
        name: 'Winslow',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-collection-03.jpg',
        imageAlt:
            'Person placing task list card into walnut card holder next to felt carrying case on leather desk pad.',
        description:
            'Be more productive than enterprise project managers with a single piece of paper.',
    },
    {
        name: 'Winslow',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-collection-03.jpg',
        imageAlt:
            'Person placing task list card into walnut card holder next to felt carrying case on leather desk pad.',
        description:
            'Be more productive than enterprise project managers with a single piece of paper.',
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

export const metadata = {
    title: 'Home | Garrett Kitchens',
}

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
                        alt="Hero Image"
                        className="object-cover object-center w-full h-full"
                    />
                </div>
                <div aria-hidden="true" className="absolute inset-0 bg-gray-900 opacity-50" />

                <div className="relative flex flex-col items-center max-w-3xl px-6 py-32 mx-auto text-center sm:py-64 lg:px-0">
                    <h1 className="text-4xl font-bold tracking-tight text-white lg:text-6xl">
                        Innovative Designs, Quality Craftmanship
                    </h1>
                    <p className="mt-4 text-xl text-white">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae fugit
                        minus a porro. Quis recusandae esse rerum reprehenderit fuga. Deleniti
                        provident.
                    </p>
                    <Button href="/learn-more">Learn More</Button>
                </div>
            </section>

            <section
                aria-labelledby="collection-heading"
                className="mx-auto max-w-3xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8"
            >
                <h2
                    id="collection-heading"
                    className="text-2xl font-bold tracking-tight text-gray-900"
                >
                    Our most popular ranges
                </h2>
                <p className="mt-4 text-base text-gray-500">
                    Lorem ipsum. Each season, we collaborate with world-class designers to create a
                    collection inspired by the natural world.
                </p>

                <div className="mt-10 space-y-12 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-8 md:space-y-0">
                    {collections.map((collection) => (
                        <a key={collection.name} href={collection.href} className="group block">
                            <div
                                aria-hidden="true"
                                className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg lg:aspect-h-6 lg:aspect-w-5 group-hover:opacity-75"
                            >
                                <img
                                    src={collection.imageSrc}
                                    alt={collection.imageAlt}
                                    className="h-full w-full object-cover object-center"
                                />
                            </div>
                            <h3 className="mt-4 text-base font-semibold text-gray-900">
                                {collection.name}
                            </h3>
                            <p className="mt-2 text-sm text-gray-500">{collection.description}</p>
                        </a>
                    ))}
                </div>
            </section>

            <section
                aria-labelledby="comfort-heading"
                className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 sm:pb-32 lg:px-8"
            >
                <div className="relative overflow-hidden rounded-lg">
                    <div className="absolute inset-0">
                        <img
                            src="/assets/home/hero/hero.png"
                            alt=""
                            className="h-full w-full object-cover object-center"
                        />
                    </div>
                    <div className="relative bg-gray-900 bg-opacity-75 px-6 py-32 sm:px-12 sm:py-40 lg:px-16">
                        <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
                            <h2
                                id="comfort-heading"
                                className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
                            >
                                Kitchen trends for 2023
                            </h2>
                            <p className="mt-3 text-xl text-white">
                                The kitchen is one of the most important rooms in the home, and it
                                is no wonder that people are always looking for new ways to make
                                their kitchens more stylish, functional and comfortable. In 2023
                                there are several kitchen trends that are expected to be popular.
                            </p>

                            <a
                                href="/blog"
                                className="mt-8 block w-full rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
                            >
                                Read Blog
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-4 pb-28 sm:px-6 sm:pb-40 lg:px-8">
                <div className="mx-auto max-w-xl text-center">
                    <h2 className="text-lg font-semibold leading-8 tracking-tight text-brand-primary">
                        Testimonials
                    </h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        We have worked with thousands of amazing people
                    </p>
                </div>
                <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
                    <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:inline-flex lg:columns-3">
                        {testimonials.map((testimonial) => (
                            <div
                                key={testimonial.author.handle}
                                className="pt-8 sm:inline-block sm:w-full sm:px-4"
                            >
                                <figure className="rounded-2xl bg-gray-50 p-8 text-sm leading-6">
                                    <blockquote className="text-gray-900">
                                        <p>{`“${testimonial.body}”`}</p>
                                    </blockquote>
                                    <figcaption className="mt-6 flex items-center gap-x-4">
                                        <img
                                            className="h-10 w-10 rounded-full bg-gray-50"
                                            src={testimonial.author.imageUrl}
                                            alt=""
                                        />
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

            <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 sm:pb-32 lg:px-8">
                <div className="bg-brand-primaryBgDark pb-20 sm:pb-24 xl:pb-0">
                    <div className="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">
                        <div className="-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
                            <div className="relative aspect-[2/1] h-full md:-mx-8 xl:mx-0 xl:aspect-auto">
                                <img
                                    className="absolute inset-0 h-full w-full xl:w-1/2 rounded-2xl bg-brand-primaryBgDark object-cover shadow-2xl"
                                    src="/assets/home/hero/hero.png"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:pr-8 xl:pl-40 xl:py-24">
                            <figure className="relative isolate">
                                <div className="leading-8 text-white sm:leading-9">
                                    <h2 className="text-3xl font-bold tracking-tight mb-8 sm:text-4xl">
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
