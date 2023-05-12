'use-client'

import Image from 'next/image'
import Link from 'next/link'

import { ChevronDoubleDownIcon } from '@heroicons/react/24/outline'
import { ButtonLink } from 'components/button/Button'
import { TestimonialCarousel } from 'components/carousel/TestimonialCarousel'
import CTASection from 'components/cta/CTASection'
import USPBar from 'components/usp-bar/USPBar'

const testimonials = [
    {
        name: 'John Doe, Croydon',
        text: `Our simple 4 step process offers our customers a stress-free
            journey in achieving their dream kitchen, unique to their
            desires. Our simple 4 step process offers our customers a
            stress-free journey in achieving their dream kitchen, unique to
            their desires.`,
        image: '/assets/home/Testimonial.jpg',
    },
    {
        name: 'John Doe, Croydon',
        text: `Our simple 4 step process offers our customers a stress-free
            journey in achieving their dream kitchen, unique to their
            desires. Our simple 4 step process offers our customers a
            stress-free journey in achieving their dream kitchen, unique to
            their desires.`,
        image: '/assets/home/Testimonial.jpg',
    },
    {
        name: 'John Doe, Croydon',
        text: `Our simple 4 step process offers our customers a stress-free
            journey in achieving their dream kitchen, unique to their
            desires. Our simple 4 step process offers our customers a
            stress-free journey in achieving their dream kitchen, unique to
            their desires.`,
        image: '/assets/home/Testimonial.jpg',
    },
]

export const metadata = {
    title: 'Home | Garrett Kitchens',
}

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

export default function Page() {
    return (
        <>
            <section className="relative bg-gray-900">
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

                    <p className="mt-4 text-xl text-gray-300">
                        We believe unique, exciting kitchens should be available to all,
                        irrespective of budget.
                    </p>

                    <ButtonLink href="/contact-us" className="mt-4">
                        Start Your Journey <span aria-hidden="true">&rarr;</span>
                    </ButtonLink>

                    <a href="#scrollLocation" className="ease-in-out duration-200 scroll-smooth">
                        <ChevronDoubleDownIcon className="w-12 bottom-[6%] animate-bounce absolute z-50 text-white" />
                    </a>
                </div>
            </section>

            <USPBar
                items={[
                    {
                        image: '/assets/home/icons/Surrey-Based.png',
                        text: 'Surrey-Based',
                    },
                    {
                        image: '/assets/home/icons/Competitive-Pricing.png',
                        text: 'Competitive Pricing',
                    },
                    {
                        image: '/assets/home/icons/Finest-Quality.png',
                        text: 'Finest Quality',
                    },
                ]}
            />

            <section
                id="scrollLocation"
                aria-labelledby="comfort-heading"
                className="px-4 py-lg mx-auto max-w-7xl md:px-6 lg:px-8"
            >
                <div className="relative px-6 lg:px-16">
                    <div className="relative flex flex-col items-center max-w-4xl mx-auto text-center">
                        <h4 className="text-sm font-semibold uppercase tracking-widest text-brand-secondary">
                            Inspired Designs
                        </h4>

                        <h2
                            id="comfort-heading"
                            className="text-2xl tracking-tight text-gray-900 mb-6 sm:text-4xl"
                        >
                            Do you feel like your kitchen is missing something? Missing your peronal
                            touch? Missing fun?
                        </h2>

                        <p className="mb-8 text-lg text-gray-500">
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
            </section>

            <USPBar
                items={[
                    {
                        image: '/assets/home/icons/Bespoke-Design.png',
                        text: 'Bespoke Design',
                    },
                    {
                        image: '/assets/home/icons/Trusted-Craftsmen.png',
                        text: 'Trusted Craftsmen',
                    },
                    {
                        image: '/assets/home/icons/Stress-Free.png',
                        text: 'Stress-Free',
                    },
                ]}
            />

            <section
                aria-labelledby="collection-heading"
                className="w-full max-w-4xl px-4 py-sm mx-auto lg:py-lg md:px-6 lg:max-w-7xl lg:px-8"
            >
                <div className="flex flex-col justify-between gap-12 md:flex-row">
                    <div className="w-full md:w-1/2">
                        <img
                            src="/assets/home/Testimonial.jpg"
                            alt="Brochure"
                            className="object-cover h-full"
                        />
                    </div>

                    <div className="w-full md:w-1/2">
                        <h4 className="text-sm font-semibold uppercase tracking-widest text-brand-secondary">
                            Customers At The Forefront
                        </h4>

                        <h3 className="text-2xl mb-4 text-gray-900 lg:text-3xl">
                            Build a Kitchen That You&apos;ll Love
                        </h3>

                        <ol className="px-4 space-y-2 text-lg text-gray-500 list-disc list-inside lg:text-xl md:space-y-4">
                            <li>A kitchen that you feel happy in</li>
                            <li>A kitchen that you love to cook in</li>
                            <li>A kitchen that you feel proud of</li>
                            <li>A kitchen that your friends envy</li>
                            <li>A kitchen that you feel happy in</li>
                            <li>A kitchen that&apos;s yours</li>
                        </ol>
                    </div>
                </div>
                <div className="flex mt-4 md:justify-center md:mt-8">
                    <ButtonLink href="/learn-more" className="w-fit">
                        Start Your Journey <span aria-hidden="true">&rarr;</span>
                    </ButtonLink>
                </div>
            </section>

            <section className="bg-brand-primaryBg py-sm lg:py-10">
                <div className="px-6 mx-auto max-w-7xl lg:px-8">
                    <h2 className="text-xl lg:text-lg leading-8 text-center text-white">
                        We work with these trusted brands
                    </h2>

                    <div className="grid items-center justify-items-center max-w-xl grid-cols-3 mx-auto mt-4 gap-x-8 gap-y-10 sm:max-w-2xl md:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-6">
                        <Image
                            className="object-contain w-24 md:w-28 lg:w-full col-span-1 md:col-span-2 h-12 lg:col-span-1"
                            src="/assets/home/brand-logos/Blum-logo.png"
                            alt="Transistor"
                            width={158}
                            height={48}
                        />
                        <Image
                            className="object-contain w-24 md:w-28 lg:w-full col-span-1 md:col-span-2 h-12 lg:col-span-1"
                            src="/assets/home/brand-logos/BORA-logo.png"
                            alt="Reform"
                            width={158}
                            height={48}
                        />
                        <Image
                            className="object-contain w-24 md:w-28 lg:w-full col-span-1 md:col-span-2 h-12 lg:col-span-1"
                            src="/assets/home/brand-logos/Bosch-logo.png"
                            alt="Tuple"
                            width={158}
                            height={48}
                        />
                        <Image
                            className="object-contain w-24 md:w-28 lg:w-full col-span-1 md:col-span-2 h-12 lg:col-span-1"
                            src="/assets/home/brand-logos/Consentino-logo.png"
                            alt="Reform"
                            width={158}
                            height={48}
                        />
                        <Image
                            className="object-contain w-24 md:w-28 lg:w-full col-span-1 md:col-span-2 h-12 lg:col-span-1"
                            src="/assets/home/brand-logos/Neff-logo.png"
                            alt="SavvyCal"
                            width={158}
                            height={48}
                        />
                        <Image
                            className="object-contain w-24 md:w-28 lg:w-40 col-span-1 md:col-span-2 h-12 lg:col-span-1"
                            src="/assets/home/brand-logos/Quooker-logo.png"
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
                        <h4 className="text-sm font-semibold uppercase tracking-widest text-brand-secondary">
                            An exceptional reputation
                        </h4>

                        <h2
                            id="collection-heading"
                            className="text-2xl tracking-tight text-gray-900 lg:text-3xl"
                        >
                            Testimonials
                        </h2>

                        <TestimonialCarousel testimonials={testimonials} />

                        <ButtonLink href="/contact-us" className="self-center mt-8 w-fit">
                            Start Your Journey <span aria-hidden="true">&rarr;</span>
                        </ButtonLink>
                    </div>
                </div>
            </section>

            <CTASection
                className="pt-[6.5rem] md:pt-[6.5rem] md:py-sm lg:py-32"
                title="Need some design inspiration?"
                image="/assets/home/kitchen-brochure.png"
                description={`With a wide choice of colours, styles, and finishing features, our Kitchen Brochure showcases all the products we offer in designing your dream kitchen.`}
                whiteBg
                button={<ButtonLink href="/brochure">Request a Brochure</ButtonLink>}
            />
        </>
    )
}
