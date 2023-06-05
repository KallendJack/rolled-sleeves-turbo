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

const kitchens = [
    {
        name: 'Modern Kitchens',
        href: '/kitchen-ranges/modern-kitchens',
        imageSrc: '/assets/home/Finalise.jpg',
        imageAlt: 'Brown leather key ring with brass metal loops and rivets on wood table.',
    },
    {
        name: 'Traditional Kitchens',
        href: '/kitchen-ranges/traditional-kitchens',
        imageSrc: '/assets/home/Showroom-Visit.jpg',
        imageAlt: 'Natural leather mouse pad on white desk next to porcelain mug and keyboard.',
    },
    {
        name: 'Handleless Kitchens',
        href: '/kitchen-ranges/handleless-kitchens',
        imageSrc: '/assets/home/Survey.png',
        imageAlt:
            'Person placing task list card into walnut card holder next to felt carrying case on leather desk pad.',
    },
    {
        name: 'In-Frame Kitchens',
        href: '/kitchen-ranges/in-frame-kitchens',
        imageSrc: '/assets/home/Place-Order.png',
        imageAlt:
            'Person placing task list card into walnut card holder next to felt carrying case on leather desk pad.',
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
                <div className="relative flex flex-col items-center max-w-4xl px-6 pb-20 md:pb-24 pt-72 mx-auto text-center sm:pt-96 lg:px-0">
                    <h1 className="text-3xl tracking-tight text-white lg:text-4xl font-homeTitle">
                        We Design & Install Inspiring Kitchens
                    </h1>

                    <ButtonLink href="/book-a-free-survey" className="mt-4">
                        Start Your Journey <span aria-hidden="true">&rarr;</span>
                    </ButtonLink>

                    <a
                        href="#scrollLocation"
                        className="duration-200 ease-in-out scroll-smooth flex justify-center"
                    >
                        <ChevronDoubleDownIcon className="w-8 lg:w-12 bottom-[3%] animate-bounce absolute z-50 text-white" />
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
                className="px-4 mx-auto py-lg max-w-7xl md:px-6 lg:px-8"
            >
                <div className="relative px-6 lg:px-16">
                    <div className="relative flex flex-col items-center max-w-4xl mx-auto text-center">
                        <h4 className="text-sm font-semibold tracking-widest uppercase text-brand-secondary">
                            Inspired Designs
                        </h4>

                        <h2
                            id="comfort-heading"
                            className="mb-6 text-2xl tracking-tight text-gray-900 sm:text-4xl"
                        >
                            Do you feel like your kitchen is missing something? Missing your peronal
                            touch? Missing fun?
                        </h2>

                        <p className="mb-8 text-lg text-gray-500">
                            We understand most kitchens are uninspiring which is why we guide and
                            empower our customers to be bold with their decisions and love their
                            unique new kitchens.
                        </p>
                        <ButtonLink href="/book-a-free-survey" className="w-fit">
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
                            <h4 className="text-sm font-semibold tracking-widest uppercase text-brand-secondary">
                                A Seamless Experience
                            </h4>

                            <p className="mt-2 text-base text-gray-500">
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
                        <ButtonLink href="/book-a-free-survey" className="w-fit">
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

            <section className="w-full bg-gray-100 py-sm lg:py-lg">
                <div
                    aria-labelledby="collection-heading"
                    className="max-w-4xl px-4 mx-auto md:px-6 lg:max-w-7xl lg:px-8"
                >
                    <div className="flex flex-col justify-between md:items-end md:flex-row">
                        <div className="md:w-3/5">
                            <h4 className="text-sm font-semibold tracking-widest uppercase text-brand-secondary">
                                Our Kitchen Styles
                            </h4>

                            <p className="mt-2 text-base text-gray-500">
                                Choose between our modern, traditional, handeless or in-frame
                                kitchens to find a style that perfectly suits your aesthetic.
                            </p>
                        </div>
                    </div>

                    <div className="mt-4 lg:mt-10 sm:grid space-y-4 sm:grid-cols-2 lg:grid-cols-4 sm:gap-4 lg:gap-8 sm:space-y-0">
                        {kitchens.map((kitchen) => (
                            <Link
                                key={kitchen.name}
                                href={kitchen.href}
                                className="relative block text-center border border-gray-400 group"
                            >
                                <div className="absolute w-full h-full z-10 bg-black opacity-40"></div>

                                <div
                                    aria-hidden="true"
                                    className="relative overflow-hidden h-96 flex justify-center items-center"
                                >
                                    <Image
                                        fill
                                        src={kitchen.imageSrc}
                                        alt={kitchen.imageAlt}
                                        className="object-cover object-center"
                                    />

                                    <h2 className="absolute text-white hover:text-white text-3xl z-50 px-6 mx-auto">
                                        {kitchen.name}
                                    </h2>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className="flex justify-center mt-8">
                        <ButtonLink href="/kitchen-ranges" className="w-fit">
                            View All Kitchens <span aria-hidden="true">&rarr;</span>
                        </ButtonLink>
                    </div>
                </div>
            </section>

            <section className="bg-brand-primaryBg py-sm lg:py-10">
                <div className="px-6 mx-auto max-w-7xl lg:px-8">
                    <h2 className="text-xl leading-8 text-center text-white lg:text-lg">
                        We work with these trusted brands
                    </h2>

                    <div className="grid items-center max-w-xl grid-cols-3 mx-auto mt-4 justify-items-center gap-x-8 gap-y-10 sm:max-w-2xl md:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-6">
                        <Image
                            className="object-contain w-24 h-12 col-span-1 md:w-28 lg:w-full md:col-span-2 lg:col-span-1"
                            src="/assets/home/brand-logos/Blum-logo.png"
                            alt="Transistor"
                            width={158}
                            height={48}
                        />
                        <Image
                            className="object-contain w-24 h-12 col-span-1 md:w-28 lg:w-full md:col-span-2 lg:col-span-1"
                            src="/assets/home/brand-logos/BORA-logo.png"
                            alt="Reform"
                            width={158}
                            height={48}
                        />
                        <Image
                            className="object-contain w-24 h-12 col-span-1 md:w-28 lg:w-full md:col-span-2 lg:col-span-1"
                            src="/assets/home/brand-logos/Bosch-logo.png"
                            alt="Tuple"
                            width={158}
                            height={48}
                        />
                        <Image
                            className="object-contain w-24 h-12 col-span-1 md:w-28 lg:w-full md:col-span-2 lg:col-span-1"
                            src="/assets/home/brand-logos/Consentino-logo.png"
                            alt="Reform"
                            width={158}
                            height={48}
                        />
                        <Image
                            className="object-contain w-24 h-12 col-span-1 md:w-28 lg:w-full md:col-span-2 lg:col-span-1"
                            src="/assets/home/brand-logos/Neff-logo.png"
                            alt="SavvyCal"
                            width={158}
                            height={48}
                        />
                        <Image
                            className="object-contain w-24 h-12 col-span-1 md:w-28 lg:w-40 md:col-span-2 lg:col-span-1"
                            src="/assets/home/brand-logos/Quooker-logo.png"
                            alt="Statamic"
                            width={158}
                            height={48}
                        />
                    </div>
                </div>
            </section>

            <section className="w-full bg-gray-100">
                <div className="w-full max-w-4xl px-4 mx-auto py-sm lg:py-lg md:px-6 lg:max-w-7xl lg:px-8">
                    <div className="flex flex-col">
                        <h4 className="text-sm font-semibold tracking-widest uppercase text-brand-secondary">
                            An exceptional reputation
                        </h4>

                        <h2
                            id="collection-heading"
                            className="text-2xl tracking-tight text-gray-900 lg:text-3xl"
                        >
                            Testimonials
                        </h2>

                        <TestimonialCarousel testimonials={testimonials} />

                        <ButtonLink href="/book-a-free-survey" className="self-center mt-8 w-fit">
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
