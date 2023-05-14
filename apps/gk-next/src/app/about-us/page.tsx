import { ButtonLink } from 'components/button/Button'
import FourStep from 'components/four-step/FourStep'
import CTASection from 'components/cta/CTASection'

export const metadata = {
    title: 'About Us | Garrett Kitchens',
}

export default function Page() {
    return (
        <>
            <div className="relative isolate -z-10">
                <svg
                    className="absolute inset-x-0 top-0 -z-10 h-[58rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
                    aria-hidden="true"
                >
                    <defs>
                        <pattern
                            id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                            width={200}
                            height={200}
                            x="50%"
                            y={-1}
                            patternUnits="userSpaceOnUse"
                        >
                            <path d="M.5 200V.5H200" fill="none" />
                        </pattern>
                    </defs>
                    <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
                        <path
                            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                            strokeWidth={0}
                        />
                    </svg>
                    <rect
                        width="100%"
                        height="100%"
                        strokeWidth={0}
                        fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
                    />
                </svg>
                <div
                    className="absolute top-0 right-0 -ml-24 overflow-hidden left-1/2 -z-10 transform-gpu blur-3xl lg:ml-24 xl:ml-48"
                    aria-hidden="true"
                >
                    <div
                        className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#B2A79D] to-[#60a295] opacity-30"
                        style={{
                            clipPath:
                                'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
                        }}
                    />
                </div>
                <div className="overflow-hidden">
                    <div className="px-6 mx-auto max-w-7xl py-sm pt-lg sm:pt-60 lg:px-8 lg:py-lg">
                        <div className="max-w-2xl mx-auto gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                            <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                                    We&apos;re changing the kitchen-buying experience.
                                </h1>
                                <p className="relative mt-6 text-lg leading-8 text-gray-500 sm:max-w-md lg:max-w-none">
                                    Cupidatat minim id magna ipsum sint dolor qui. Sunt sit in quis
                                    cupidatat mollit aute velit. Et labore commodo nulla aliqua
                                    proident mollit ullamco exercitation tempor. Sint aliqua anim
                                    nulla sunt mollit id pariatur in voluptate cillum. Eu voluptate
                                    tempor esse minim amet fugiat veniam occaecat aliqua.
                                </p>
                            </div>
                            <div className="flex justify-end gap-8 mt-14 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                                <div className="flex-none pt-32 ml-auto space-y-8 w-44 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                                    <div className="relative">
                                        <img
                                            src="/assets/home/Place-Order.png"
                                            alt=""
                                            className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                        />
                                        <div className="absolute inset-0 pointer-events-none rounded-xl ring-1 ring-inset ring-gray-900/10" />
                                    </div>
                                </div>
                                <div className="flex-none mr-auto space-y-8 w-44 sm:mr-0 sm:pt-52 lg:pt-36">
                                    <div className="relative">
                                        <img
                                            src="/assets/home/hero/hero.png"
                                            alt=""
                                            className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                        />
                                        <div className="absolute inset-0 pointer-events-none rounded-xl ring-1 ring-inset ring-gray-900/10" />
                                    </div>
                                    <div className="relative">
                                        <img
                                            src="/assets/home/Testimonial.jpg"
                                            alt=""
                                            className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                        />
                                        <div className="absolute inset-0 pointer-events-none rounded-xl ring-1 ring-inset ring-gray-900/10" />
                                    </div>
                                </div>
                                <div className="flex-none pt-32 space-y-8 w-44 sm:pt-0">
                                    <div className="relative">
                                        <img
                                            src="/assets/home/Showroom-Visit.jpg"
                                            alt=""
                                            className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                        />
                                        <div className="absolute inset-0 pointer-events-none rounded-xl ring-1 ring-inset ring-gray-900/10" />
                                    </div>
                                    <div className="relative">
                                        <img
                                            src="/assets/home/Place-Order.png"
                                            alt=""
                                            className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                        />
                                        <div className="absolute inset-0 pointer-events-none rounded-xl ring-1 ring-inset ring-gray-900/10" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="w-full bg-gray-100 py-sm lg:py-lg">
                <div className="max-w-4xl px-4 mx-auto lg:max-w-7xl lg:px-8">
                    <div className="pb-8">
                        <h2 className="text-2xl tracking-tight text-gray-900 lg:text-3xl">
                            Our Values
                        </h2>

                        <p className="mt-4 text-base text-gray-500">
                            Lorem ipsum dolor sit amet, connsecutor aduoscubng cult su dououpas nor
                            saltador manza alcan.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3">
                        <div>
                            <h4 className="text-lg text-gray-900">Exceptional Service</h4>

                            <p className="pt-2 text-gray-500 sm:text-sm">
                                Lorem ipsum dolor sit amet, connsecutor aduoscubng cult su dououpas
                                nor saltador manza alcan. Lorem ipsum dolor sit amet, connsecutor
                                aduoscubng cult su dououpas nor saltador manza alcan.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-lg text-gray-900">Exceptional Service</h4>

                            <p className="pt-2 text-gray-500 sm:text-sm">
                                Lorem ipsum dolor sit amet, connsecutor aduoscubng cult su dououpas
                                nor saltador manza alcan. Lorem ipsum dolor sit amet, connsecutor
                                aduoscubng cult su dououpas
                            </p>
                        </div>

                        <div>
                            <h4 className="text-lg text-gray-900">Exceptional Service</h4>

                            <p className="pt-2 text-gray-500 sm:text-sm">
                                Lorem ipsum dolor sit amet, connsecutor aduoscubng cult su dououpas
                                nor saltador manza alcan. nor saltador manza alcan. Lorem ipsum
                                dolor sit amet, connsecutor aduoscubng cult su dououpas nor saltador
                                manza alcan.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-lg text-gray-900">Exceptional Service</h4>

                            <p className="pt-2 text-gray-500 sm:text-sm">
                                Lorem ipsum dolor sit amet, connsecutor aduoscubng cult su dououpas
                                nor saltador manza alcan. Lorem ipsum dolor sit amet, connsecutor
                                aduoscubng cult su dououpas nor saltador manza alcan.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-lg text-gray-900">Exceptional Service</h4>

                            <p className="pt-2 text-gray-500 sm:text-sm">
                                Lorem ipsum dolor sit amet, connsecutor aduoscubng cult su dououpas
                                nor saltador manza alcan. Lorem ipsum dolor sit amet, connsecutor
                                aduoscubng cult su dououpas nor saltador manza alcan.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-lg text-gray-900">Exceptional Service</h4>

                            <p className="pt-2 text-gray-500 sm:text-sm">
                                Lorem ipsum dolor sit amet, connsecutor aduoscubng cult su dououpas
                                nor saltador manza alcan. Lorem ipsum dolor sit amet, connsecutor
                                aduoscubng cult su dououpas nor saltador manza alcan.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <FourStep whiteBg className=""></FourStep>

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
