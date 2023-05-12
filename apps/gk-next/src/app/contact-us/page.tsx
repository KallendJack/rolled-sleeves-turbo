import Image from 'next/image'

import { Button } from 'components/button/Button'
import { EnvelopeIcon, PhoneIcon, MapIcon } from '@heroicons/react/24/outline'

export const metadata = {
    title: 'Contact Us | Garrett Kitchens',
}

export default function Page() {
    return (
        <section className="relative bg-white">
            <div className="relative h-64 sm:h-80 lg:h-auto lg:absolute lg:inset-0 lg:right-1/2">
                <Image
                    fill
                    className="object-cover"
                    src="/assets/home/hero/hero.png"
                    alt="Contact Us"
                />
            </div>
            <div className="py-sm lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:pt-32">
                <div className="grid-cols-2 col-end-6 px-4 md:px-6 lg:px-8">
                    <div className="max-w-xl mx-auto lg:mx-0 md:max-w-lg lg:max-w-md xl:max-w-lg">
                        <h2 className="text-3xl tracking-tight text-gray-900">Contact Us</h2>
                        <p className="my-2 text-lg leading-8 text-gray-600">
                            Get in touch with one of our friendly kitchen designers about how we can
                            help.
                        </p>

                        <div className="flex items-start flex-col sm:flex-row gap-4 sm:gap-0 justify-between mt-4">
                            <div className="flex items-start gap-x-3">
                                <MapIcon className="w-5 mt-[5px] text-brand-primaryFocus"></MapIcon>

                                <ul className="text-lg leading-8 text-gray-600">
                                    <li>Unit 2 IO Trade Centre</li>
                                    <li>57A Croydon Road</li>
                                    <li>Croydon</li>
                                    <li>CR0 4WQ</li>
                                </ul>
                            </div>

                            <div className="flex flex-col">
                                <div className="flex gap-x-3">
                                    <PhoneIcon className="w-5 text-brand-primaryFocus"></PhoneIcon>
                                    <a
                                        className="text-lg leading-8 text-gray-600 hover:text-brand-primaryFocus"
                                        href="tel:02086190004"
                                    >
                                        020 8619 0004
                                    </a>
                                </div>

                                <div className="flex gap-x-3">
                                    <EnvelopeIcon className="w-5 text-brand-primaryFocus"></EnvelopeIcon>
                                    <a
                                        className="text-lg leading-8 text-gray-600 hover:text-brand-primaryFocus"
                                        href="mailto:info@garrettkitchens.co.uk"
                                    >
                                        info@garrettkitchens.co.uk
                                    </a>{' '}
                                </div>
                            </div>
                        </div>

                        <form action="#" method="POST" className="mt-8">
                            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                                <div>
                                    <label
                                        htmlFor="first-name"
                                        className="block text-sm font-semibold leading-6 text-gray-900"
                                    >
                                        First name
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            type="text"
                                            name="first-name"
                                            id="first-name"
                                            autoComplete="given-name"
                                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-primary sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label
                                        htmlFor="last-name"
                                        className="block text-sm font-semibold leading-6 text-gray-900"
                                    >
                                        Last name
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            type="text"
                                            name="last-name"
                                            id="last-name"
                                            autoComplete="family-name"
                                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-primary sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-semibold leading-6 text-gray-900"
                                    >
                                        Email
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-primary sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <div className="flex justify-between text-sm leading-6">
                                        <label
                                            htmlFor="phone"
                                            className="block font-semibold text-gray-900"
                                        >
                                            Phone
                                        </label>
                                        <p id="phone-description" className="text-gray-400">
                                            Optional
                                        </p>
                                    </div>
                                    <div className="mt-2.5">
                                        <input
                                            type="tel"
                                            name="phone"
                                            id="phone"
                                            autoComplete="tel"
                                            aria-describedby="phone-description"
                                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-primary sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <div className="flex justify-between text-sm leading-6">
                                        <label
                                            htmlFor="message"
                                            className="block text-sm font-semibold leading-6 text-gray-900"
                                        >
                                            How can we help you?
                                        </label>
                                        <p id="message-description" className="text-gray-400">
                                            Max 500 characters
                                        </p>
                                    </div>
                                    <div className="mt-2.5">
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={4}
                                            aria-describedby="message-description"
                                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-primary sm:text-sm sm:leading-6"
                                            defaultValue={''}
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <div className="flex justify-between text-sm leading-6">
                                        <label
                                            htmlFor="phone"
                                            className="block font-semibold text-gray-900"
                                        >
                                            Expected Budget
                                        </label>
                                        <p id="phone-description" className="text-gray-400">
                                            Optional
                                        </p>
                                    </div>
                                    <div className="mt-2.5">
                                        <input
                                            type="text"
                                            name="expected-budget"
                                            id="expected-budget"
                                            autoComplete="expected-budget"
                                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-primary sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-end pt-8 mt-10 border-t border-gray-900/10">
                                <Button type="submit">Send message</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
