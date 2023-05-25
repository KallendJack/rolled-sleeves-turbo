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
            <section className="flex justify-center w-full bg-white py-lg">
                <div className="flex w-full px-4 mx-auto md:max-w-4xl md:px-6 lg:max-w-7xl lg:px-8">
                    <div className="flex flex-col w-full gap-6 border border-gray-200 shadow-lg md:flex-row lg:gap-8">
                        <Image
                            width={500}
                            height={400}
                            src="/assets/home/hero/hero.png"
                            alt="image"
                            className="relative object-cover w-full md:w-1/2"
                        />
                        <div className="w-full p-4 md:py-8 md:w-1/2">
                            <h2
                                id="collection-heading"
                                className="mb-4 text-2xl tracking-tight text-gray-900 lg:text-3xl"
                            >
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

            <FourStep whiteBg />
        </>
    )
}
