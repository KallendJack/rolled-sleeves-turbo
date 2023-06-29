import Image from 'next/image'

import FourStep from 'components/four-step/FourStep'
import { Button } from 'components/button/Button'
import { Input } from 'components/input/Input'
import BrochureForm from 'components/form/BrochureForm'

export const metadata = {
    title: 'Request a Free Brochure | Garrett Kitchens',
}

export default function Page() {
    return (
        <>
            <section className="flex justify-center w-full py-0 bg-white md:py-lg">
                <div className="flex w-full mx-auto sm:px-4 md:max-w-4xl md:px-6 lg:max-w-7xl lg:px-8">
                    <div className="flex flex-col w-full shadow-lg sm:gap-6 sm:border sm:border-gray-200 md:flex-row lg:gap-8">
                        <Image
                            width={500}
                            height={400}
                            src="/assets/brochure/brochure_mockup_5.png"
                            alt="image"
                            className="relative object-cover w-full md:w-1/2"
                        />
                        <div className="w-full p-4 py-sm md:py-8 md:w-1/2">
                            <h2 className="mb-4 text-2xl tracking-tight text-gray-900 lg:text-3xl">
                                Get Our Free Kitchen Brochure
                            </h2>
                            <p className="text-gray-500">
                                Fill in your details below to download our kitchen brochure.
                            </p>
                            <p className="text-gray-500">Don&apos;t forget to save a copy!</p>
                            <BrochureForm />
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex flex-col items-center w-full bg-gray-100 py-sm lg:py-lg">
                <h2
                    id="collection-heading"
                    className="mb-8 text-2xl tracking-tight text-center text-gray-900 lg:text-3xl lg:mb-12"
                >
                    What&apos;s included in the kitchen brochure?
                </h2>

                <div className="flex flex-col w-full gap-8 px-4 mx-auto md:flex-row lg:gap-12 md:px-6 md:max-w-4xl lg:px-8 lg:max-w-7xl">
                    <div className="text-center w-full md:w-[33%]">
                        <Image
                            width={200}
                            height={250}
                            src="/assets/brochure/Kitchen Ranges v1.jpg"
                            alt="image"
                            className="relative object-cover w-full mb-4"
                        />

                        <h2 className="mb-4 text-xl tracking-tight text-gray-900 lg:text-2xl">
                            Kitchen Ranges
                        </h2>

                        <p className="text-gray-500">
                            The design of your new kitchen is one of the most important decisions
                            you can make. From cabinet and appliance layouts to finishes and
                            textures. This brochure details everything you need.
                        </p>
                    </div>

                    <div className="text-center w-full md:w-[33%]">
                        <Image
                            width={200}
                            height={200}
                            src="/assets/brochure/Internal Solutions v1.jpg"
                            alt="image"
                            className="relative object-cover w-full mb-4"
                        />

                        <h2 className="mb-4 text-xl tracking-tight text-gray-900 lg:text-2xl">
                            Internal Solutions
                        </h2>

                        <p className="text-gray-500">
                            Our range of indispensable internal solutions allows you to achieve an
                            organised, practical kitchen without compromising on its aesthetics
                        </p>
                    </div>

                    <div className="text-center w-full md:w-[33%]">
                        <Image
                            width={200}
                            height={250}
                            src="/assets/brochure/Beyond the Kitchen.png"
                            alt="image"
                            className="relative object-cover w-full mb-4"
                        />

                        <h2 className="mb-4 text-xl tracking-tight text-gray-900 lg:text-2xl">
                            Beyond the Kitchen
                        </h2>

                        <p className="text-gray-500">
                            Throughout this brochure, you will also find fabulous examples of
                            pantries, bathrooms, and laundry rooms, all of which combine clever
                            functionality with stunning creative design.
                        </p>
                    </div>
                </div>
            </section>

            <FourStep whiteBg />
        </>
    )
}
