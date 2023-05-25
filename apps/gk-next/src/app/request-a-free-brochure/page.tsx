import Image from 'next/image'

import FourStep from 'components/four-step/FourStep'
import { Button } from 'components/button/Button'
import Input from 'components/input/Input'

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
                            className="relative w-full md:w-1/2"
                        ></Image>

                        <div className="w-full p-4 md:py-8 md:w-1/2">
                            <h2
                                id="collection-heading"
                                className="mb-4 text-2xl tracking-tight text-gray-900 lg:text-3xl"
                            >
                                Get Our Free Kitchen Brochure
                            </h2>

                            <p>Fill in your details below to download our kitchen brochure.</p>
                            <p>Don&apos;t forget to save a copy!</p>

                            <form className="flex flex-col gap-4 mt-4 md:w-4/5 lg:w-3/5">
                                <div>
                                    <label
                                        htmlFor="first-name"
                                        className="block text-sm font-semibold leading-6 text-gray-900"
                                    >
                                        What&apos;s your email address?
                                    </label>
                                    <div className="mt-2.5">
                                        <Input type="email" autoComplete="email" />
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="first-name"
                                        className="block text-sm font-semibold leading-6 text-gray-900"
                                    >
                                        First name
                                    </label>
                                    <div className="mt-2.5">
                                        <Input type="text" autoComplete="given-name" />
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="first-name"
                                        className="block text-sm font-semibold leading-6 text-gray-900"
                                    >
                                        First name
                                    </label>
                                    <div className="mt-2.5">
                                        <Input type="text" autoComplete="family-name" />
                                    </div>
                                </div>

                                <div className="flex w-full mt-4 border-gray-900/10">
                                    <Button type="submit" className="w-full">
                                        Download Brochure
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <FourStep whiteBg className=""></FourStep>
        </>
    )
}
