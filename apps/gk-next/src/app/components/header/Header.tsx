'use client'

import { Fragment, useState } from 'react'
import Image from 'next/image'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

import { classNames } from 'utils/tailwind/classNames'
import { ButtonLink } from 'components/button/Button'

const kitchens = [
    {
        name: 'Modern Kitchens',
        href: '/kitchen-ranges/modern-kitchens',
    },
    {
        name: 'Traditional Kitchens',
        href: '/kitchen-ranges/traditional-kitchens',
    },
]

const bookings = [
    {
        name: 'Showroom Appointment',
        href: '/showroom-appointment',
    },
    {
        name: 'Home Survey',
        href: '/home-survey',
    },
    {
        name: 'Advice Consultation',
        href: '/advice-consultation',
    },
]

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="bg-white border-b border-gray-200">
            <nav
                className="flex items-center justify-between p-4 mx-auto md:p-6 max-w-7xl lg:px-8"
                aria-label="Global"
            >
                <div className="flex lg:flex-1">
                    <a href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Garrett Kitchens</span>
                        <Image width="175" height="66" src="/assets/logos/logo.png" alt="Logo" />
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="w-6 h-6" aria-hidden="true" />
                    </button>
                </div>
                <Popover.Group className="hidden lg:flex lg:gap-x-12">
                    <Popover className="relative">
                        <Popover.Button className="flex items-center text-sm font-semibold leading-6 text-gray-900 gap-x-1">
                            Kitchens
                            <ChevronDownIcon
                                className="flex-none w-5 h-5 text-gray-400"
                                aria-hidden="true"
                            />
                        </Popover.Button>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <Popover.Panel className="absolute z-10 w-screen max-w-sm mt-3 overflow-hidden bg-white shadow-lg -left-8 top-full rounded-3xl ring-1 ring-gray-900/5">
                                <div className="p-4">
                                    {kitchens.map((item) => (
                                        <div
                                            key={item.name}
                                            className="relative flex items-center p-4 text-sm leading-6 rounded-lg group gap-x-6 hover:bg-gray-50"
                                        >
                                            <div className="flex-auto">
                                                <a
                                                    href={item.href}
                                                    className="block font-semibold text-gray-900"
                                                >
                                                    {item.name}
                                                    <span className="absolute inset-0" />
                                                </a>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </Popover>
                    <a href="/brochure" className="text-sm font-semibold leading-6 text-gray-900">
                        Brochure
                    </a>
                    <a href="/projects" className="text-sm font-semibold leading-6 text-gray-900">
                        Our Projects
                    </a>
                    <Popover className="relative">
                        <Popover.Button className="flex items-center text-sm font-semibold leading-6 text-gray-900 gap-x-1">
                            Bookings
                            <ChevronDownIcon
                                className="flex-none w-5 h-5 text-gray-400"
                                aria-hidden="true"
                            />
                        </Popover.Button>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <Popover.Panel className="absolute z-10 w-screen max-w-sm mt-3 overflow-hidden bg-white shadow-lg -left-8 top-full rounded-3xl ring-1 ring-gray-900/5">
                                <div className="p-4">
                                    {bookings.map((item) => (
                                        <div
                                            key={item.name}
                                            className="relative flex items-center p-4 text-sm leading-6 rounded-lg group gap-x-6 hover:bg-gray-50"
                                        >
                                            <div className="flex-auto">
                                                <a
                                                    href={item.href}
                                                    className="block font-semibold text-gray-900"
                                                >
                                                    {item.name}
                                                    <span className="absolute inset-0" />
                                                </a>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </Popover>
                </Popover.Group>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <ButtonLink href="/contact-us">
                        Start Journey <span aria-hidden="true">&rarr;</span>
                    </ButtonLink>
                </div>
            </nav>
            <Dialog
                as="div"
                className="lg:hidden"
                open={mobileMenuOpen}
                onClose={setMobileMenuOpen}
            >
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full px-6 py-6 overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Garrett Kitchens</span>
                            <Image
                                width="175"
                                height="66"
                                src="/assets/logos/logo.png"
                                alt="Logo"
                            />
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="w-6 h-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="flow-root mt-6">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="py-6 space-y-2">
                                <Disclosure as="div" className="-mx-3">
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50">
                                                Kitchens
                                                <ChevronDownIcon
                                                    className={classNames(
                                                        open ? 'rotate-180' : '',
                                                        'h-5 w-5 flex-none',
                                                    )}
                                                    aria-hidden="true"
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="mt-2 space-y-2">
                                                {[...kitchens].map((item) => (
                                                    <Disclosure.Button
                                                        key={item.name}
                                                        as="a"
                                                        href={item.href}
                                                        className="block py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
                                                    >
                                                        {item.name}
                                                    </Disclosure.Button>
                                                ))}
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                                <a
                                    href="/brochure"
                                    className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
                                >
                                    Brochure
                                </a>
                                <a
                                    href="/projects"
                                    className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
                                >
                                    Projects
                                </a>
                                <Disclosure as="div" className="-mx-3">
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50">
                                                Bookings
                                                <ChevronDownIcon
                                                    className={classNames(
                                                        open ? 'rotate-180' : '',
                                                        'h-5 w-5 flex-none',
                                                    )}
                                                    aria-hidden="true"
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="mt-2 space-y-2">
                                                {[...bookings].map((item) => (
                                                    <Disclosure.Button
                                                        key={item.name}
                                                        as="a"
                                                        href={item.href}
                                                        className="block py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
                                                    >
                                                        {item.name}
                                                    </Disclosure.Button>
                                                ))}
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                            </div>
                            <div className="py-6">
                                <ButtonLink href="/contact-us">
                                    Start Journey <span aria-hidden="true">&rarr;</span>
                                </ButtonLink>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}
