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
            <section className="flex justify-center w-full bg-white py-0 md:py-lg">
                <div className="flex w-full sm:px-4 mx-auto md:max-w-4xl md:px-6 lg:max-w-7xl lg:px-8">
                    <div className="flex flex-col w-full sm:gap-6 sm:border sm:border-gray-200 shadow-lg md:flex-row lg:gap-8">
                        <Image
                            width={500}
                            height={400}
                            src="/assets/home/hero/hero.png"
                            alt="image"
                            className="relative object-cover w-full md:w-1/2"
                        />
                        <div className="w-full py-sm p-4 md:py-8 md:w-1/2">
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

            <section className="py-sm bg-gray-100 w-full lg:py-lg flex items-center flex-col">
                <h2
                    id="collection-heading"
                    className="mb-8 text-2xl tracking-tight text-gray-900 lg:text-3xl text-center lg:mb-12"
                >
                    What&apos;s included in the kitchen brochure?
                </h2>

                <div className="flex flex-col md:flex-row w-full px-4 gap-8 lg:gap-12 md:px-6 mx-auto md:max-w-4xl lg:px-8 lg:max-w-7xl">
                    <div className="text-center w-full md:w-[33%]">
                        <Image
                            width={200}
                            height={250}
                            src="/assets/home/hero/hero.png"
                            alt="image"
                            className="relative object-cover w-full mb-4"
                        />

                        <h2 className="mb-4 text-xl tracking-tight text-gray-900 lg:text-2xl">
                            Kitchen Ranges
                        </h2>

                        <p className="text-gray-500">
                            The design of your new kitchen is one of the most important decisions
                            you can make. From cabinet and appliance to layouts to finishes and
                            textures. This brochure details everything you need.
                        </p>
                    </div>

                    <div className="text-center w-full md:w-[33%]">
                        <Image
                            width={200}
                            height={250}
                            src="/assets/home/hero/hero.png"
                            alt="image"
                            className="relative object-cover w-full mb-4"
                        />

                        <h2 className="mb-4 text-xl tracking-tight text-gray-900 lg:text-2xl">
                            Internal Solutions
                        </h2>

                        <p className="text-gray-500">
                            Our range of indispensable internal solutions allows you to achieve an
                            organised, practical kitchen without compremising on its aesthetics.
                        </p>
                    </div>

                    <div className="text-center w-full md:w-[33%]">
                        <Image
                            width={200}
                            height={250}
                            src="/assets/home/hero/hero.png"
                            alt="image"
                            className="relative object-cover w-full mb-4"
                        />

                        <h2 className="mb-4 text-xl tracking-tight text-gray-900 lg:text-2xl">
                            Beyond the Kitchen
                        </h2>

                        <p className="text-gray-500">
                            Throughout this brochure, you will also find fabulous examples of
                            pantries, bootrooms and laudry rooms, all of which combine clever
                            functionality with stunning creative design.
                        </p>
                    </div>
                </div>
            </section>

            <FourStep whiteBg />
        </>
    )
}
