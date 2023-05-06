'use-client'

import Image from 'next/image'
import Link from 'next/link'

import { ButtonLink } from 'components/button/Button'
import { Carousel } from 'components/carousel/Carousel'
import CTASection from 'components/cta/CTASection'

export const metadata = {
    title: 'Home | Garrett Kitchens',
}

const collections = [
    {
        number: 1,
        name: 'Book a Survey',
        href: '#',
        imageSrc: '/assets/home/Survey.png',
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
        imageSrc: '/assets/home/Finalise.jpg',
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
                        We believe unique, exciting kitchens should be available to all,
                        irrespective of budget.
                    </p>

                    <ButtonLink href="/contact-us" className="mt-4">
                        Start Your Journey <span aria-hidden="true">&rarr;</span>
                    </ButtonLink>
                </div>
            </section>

            <section className="w-full bg-brand-primaryBg">
                <dl className="grid grid-cols-3 px-4 py-8 lg:px-8 font-heading text-sm md:text-base text-white font-extralight tracking-widest lg:text-lg">
                    <div className="sm:flex-row">
                        <div className="flex flex-col items-center justify-center border-l gap-x-4 border-white py-3 sm:flex-row">
                            <Image
                                src="/assets/home/icons/Surrey-Based.png"
                                alt="Surrey-based icon"
                                className=""
                                width={30}
                                height={40}
                            />

                            <p className="flex items-center leading-7 text-center text-md">
                                Surrey-Based
                            </p>
                        </div>
                    </div>

                    <div className="sm:flex-row">
                        <div className="flex flex-col items-center justify-center border-x gap-x-4 border-white py-3 sm:flex-row">
                            <Image
                                src="/assets/home/icons/Competitive-Pricing.png"
                                alt="Competitive pricing icon"
                                width={30}
                                height={40}
                            />

                            <p className="flex items-center font-extralight leading-7 text-center">
                                Competitive Pricing
                            </p>
                        </div>
                    </div>

                    <div className="sm:flex-row">
                        <div className="flex flex-col items-center justify-center border-r gap-x-4 border-white py-3 sm:flex-row">
                            <Image
                                src="/assets/home/icons/Finest-Quality.png"
                                alt="Finest quality icon"
                                width={30}
                                height={40}
                            />

                            <p className="flex items-center font-extralight leading-7 text-center">
                                Finest Quality
                            </p>
                        </div>
                    </div>
                </dl>
            </section>

            <section
                aria-labelledby="comfort-heading"
                className="px-4 py-lg mx-auto max-w-7xl md:px-6 lg:px-8"
            >
                <div className="relative px-6 lg:px-16">
                    <div className="relative flex flex-col items-center max-w-4xl mx-auto text-center">
                        <h4 className="mb-3 text-sm uppercase tracking-widest text-brand-secondary">
                            Inspired Designs
                        </h4>

                        <h2
                            id="comfort-heading"
                            className="text-2xl tracking-tight text-gray-900 mb-6 sm:text-4xl"
                        >
                            Do you feel like your kitchen is missing something? Missing your peronal
                            touch? Missing fun?
                        </h2>

                        <p className="mb-8 text-lg text-grey-500">
                            We understand most kitchens are uninspiring which is why we guide and
                            empower our customers to be bold with their decisions and love their
                            unique new kitchens.
                        </p>
                        <ButtonLink href="/blog" className="w-fit">
                            Start Your Journey <span aria-hidden="true">&rarr;</span>
                        </ButtonLink>
                    </div>
                </div>
            </section>

            <section className="w-full bg-gray-100 py-sm lg:py-lg">
                <div
                    aria-labelledby="collection-heading"
                    className="max-w-4xl px-4 mx-auto md:px-6 lg:max-w-7xl lg:px-8"
                >
                    <div className="flex flex-col justify-between md:items-end md:flex-row">
                        <div className="md:w-3/5">
                            <h4 className="text-sm uppercase tracking-widest text-brand-secondary">
                                A Seamless Experience
                            </h4>

                            <h2
                                id="collection-heading"
                                className="text-2xl tracking-tight text-gray-900"
                            >
                                Achieve your dream kitchen in 4 easy steps
                            </h2>

                            <p className="mt-2 text-base text-gray-500">
                                Our simple 4 step process offers our customers a stress-free journey
                                in achieving their dream kitchen, unique to their desires.
                            </p>
                        </div>

                        <ButtonLink href="/learn-more" className="mt-4 w-fit h-fit">
                            Start Your Journey <span aria-hidden="true">&rarr;</span>
                        </ButtonLink>
                    </div>

                    <div className="mt-16 space-y-12 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-8 sm:space-y-0">
                        {collections.map((collection) => (
                            <Link
                                key={collection.name}
                                href={collection.href}
                                className="block text-center group relative border border-gray-400"
                            >
                                <div className="absolute -top-7 left-0 right-0 text-lg font-body mx-auto w-14 h-14 rounded-full bg-white border border-gray-400 text-gray-900 z-50 flex items-center justify-center">
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

                                    <p className="px-6 mt-3 text-gray-500 sm:text-sm">
                                        {collection.description}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="w-full bg-brand-primaryBg">
                <dl className="grid grid-cols-3 px-4 py-8 lg:px-8 font-heading text-sm md:text-base text-white font-extralight tracking-widest lg:text-lg">
                    <div className="sm:flex-row">
                        <div className="flex flex-col items-center justify-center border-l gap-x-4 border-white py-3 sm:flex-row">
                            <Image
                                src="/assets/home/icons/Bespoke-Design.png"
                                alt="Surrey-based icon"
                                className="w-8"
                                width={30}
                                height={40}
                            />

                            <p className="flex items-center leading-7 text-center text-md">
                                Bespoke Design
                            </p>
                        </div>
                    </div>

                    <div className="sm:flex-row">
                        <div className="flex flex-col items-center justify-center border-x gap-x-4 border-white py-3 sm:flex-row">
                            <Image
                                src="/assets/home/icons/Trusted-Craftsmen.png"
                                alt="Surrey-based icon"
                                className=""
                                width={30}
                                height={40}
                            />

                            <p className="flex items-center font-extralight leading-7 text-center">
                                Trusted Craftsmen
                            </p>
                        </div>
                    </div>

                    <div className="sm:flex-row">
                        <div className="flex flex-col items-center justify-center border-r gap-x-4 border-white py-3 sm:flex-row">
                            <Image
                                src="/assets/home/icons/Stress-Free.png"
                                alt="Surrey-based icon"
                                className=""
                                width={30}
                                height={40}
                            />

                            <p className="flex items-center font-extralight leading-7 text-center">
                                Stress-Free
                            </p>
                        </div>
                    </div>
                </dl>
            </section>
            <section
                aria-labelledby="collection-heading"
                className="w-full max-w-4xl px-4 py-sm mx-auto lg:py-lg md:px-6 lg:max-w-7xl lg:px-8"
            >
                <div className="flex flex-col items-start justify-between gap-12 md:flex-row">
                    <div className="w-full md:w-1/2">
                        <img
                            src="/assets/home/kitchen-brochure.png"
                            alt="Brochure"
                            className="object-cover h-full"
                        />
                    </div>

                    <div className="w-full md:w-1/2">
                        <h4 className="text-sm mb-2 uppercase tracking-widest text-brand-secondary">
                            Customers At The Forefront
                        </h4>

                        <h3 className="text-2xl mb-4 text-gray-900 lg:text-3xl lg:mb-6">
                            Build a Kitchen That You&apos;ll Love
                        </h3>

                        <ol className="p-4 space-y-2 text-lg text-gray-500 list-disc list-inside lg:text-xl md:space-y-6">
                            <li>A kitchen that you feel happy in</li>
                            <li>A kitchen that you love to cook in</li>
                            <li>A kitchen that you feel proud of</li>
                            <li>A kitchen that your friends envy</li>
                            <li>A kitchen that you feel happy in</li>
                            <li>A kitchen that&apos;s yours</li>
                        </ol>

                        <ButtonLink href="/learn-more" className=" w-fit">
                            Start Your Journey <span aria-hidden="true">&rarr;</span>
                        </ButtonLink>
                    </div>
                </div>
            </section>

            <section className="bg-brand-primaryBg py-sm lg:py-16">
                <div className="px-6 mx-auto max-w-7xl lg:px-8">
                    <h2 className="text-lg leading-8 text-center text-white">
                        We work with these trusted brands
                    </h2>

                    <div className="grid items-center max-w-lg grid-cols-4 mx-auto mt-6 gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                        <Image
                            className="object-contain w-full col-span-2 max-h-12 lg:col-span-1"
                            src="/assets/home/brand-logos/Blum.svg"
                            alt="Transistor"
                            width={158}
                            height={48}
                        />
                        <Image
                            className="object-contain w-full col-span-2 max-h-12 lg:col-span-1"
                            src="/assets/home/brand-logos/BORA.png"
                            alt="Reform"
                            width={158}
                            height={48}
                        />
                        <Image
                            className="object-contain w-full col-span-2 max-h-12 lg:col-span-1"
                            src="/assets/home/brand-logos/Bosch.png"
                            alt="Tuple"
                            width={158}
                            height={48}
                        />
                        <Image
                            className="object-contain w-full col-span-2 max-h-12 sm:col-start-2 lg:col-span-1"
                            src="/assets/home/brand-logos/Neff.png"
                            alt="SavvyCal"
                            width={158}
                            height={48}
                        />
                        <Image
                            className="object-contain w-full col-span-2 col-start-2 max-h-12 sm:col-start-auto lg:col-span-1"
                            src="/assets/home/brand-logos/Quooker.png"
                            alt="Statamic"
                            width={158}
                            height={48}
                        />
                    </div>
                </div>
            </section>

            <section className="w-full bg-gray-100">
                <div className="w-full max-w-4xl px-4 py-sm mx-auto lg:py-lg md:px-6 lg:max-w-7xl lg:px-8">
                    <div className="flex flex-col">
                        <h4 className="text-sm uppercase tracking-widest text-brand-secondary">
                            An exceptional reputation
                        </h4>

                        <h2
                            id="collection-heading"
                            className="text-2xl tracking-tight text-gray-900"
                        >
                            Testimonials
                        </h2>

                        <Carousel></Carousel>

                        <ButtonLink href="/contact-us" className="self-center mt-8 w-fit">
                            Start Your Journey <span aria-hidden="true">&rarr;</span>
                        </ButtonLink>
                    </div>
                </div>
            </section>

            <CTASection
                className="lg:py-40"
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
