'use client'

import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, PlusIcon } from '@heroicons/react/20/solid'

import { classNames } from 'utils/classNames'

type KitchenRangeContentProps = {
    title: string
    description: string
    products: {
        id: number
        name: string
        href: string
        price: string
        description: string
        options: string
        imageSrc: string
        imageAlt: string
    }[]
    filters: {
        id: string
        name: string
        options: {
            value: string
            label: string
        }[]
    }[]
}

const KitchenRangeContent = (props: KitchenRangeContentProps) => {
    const { title, description, products, filters } = props
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

    return (
        <div className="bg-white">
            <div>
                {/* Mobile filter dialog */}
                <Transition.Root show={mobileFiltersOpen} as={Fragment}>
                    <Dialog
                        as="div"
                        className="relative z-40 lg:hidden"
                        onClose={setMobileFiltersOpen}
                    >
                        <Transition.Child
                            as={Fragment}
                            enter="transition-opacity ease-linear duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-linear duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-black bg-opacity-25" />
                        </Transition.Child>
                        <div className="fixed inset-0 z-40 flex">
                            <Transition.Child
                                as={Fragment}
                                enter="transition ease-in-out duration-300 transform"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transition ease-in-out duration-300 transform"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <Dialog.Panel className="relative flex flex-col w-full h-full max-w-xs py-4 pb-6 ml-auto overflow-y-auto bg-white shadow-xl">
                                    <div className="flex items-center justify-between px-4">
                                        <h2 className="text-lg font-medium text-gray-900">
                                            Filters
                                        </h2>
                                        <button
                                            type="button"
                                            className="flex items-center justify-center w-10 h-10 p-2 -mr-2 text-gray-400 hover:text-gray-500"
                                            onClick={() => setMobileFiltersOpen(false)}
                                        >
                                            <span className="sr-only">Close menu</span>
                                            <XMarkIcon className="w-6 h-6" aria-hidden="true" />
                                        </button>
                                    </div>
                                    {/* Filters */}
                                    <form className="mt-4">
                                        {filters.map((section) => (
                                            <Disclosure
                                                as="div"
                                                key={section.name}
                                                className="pt-4 pb-4 border-t border-gray-200"
                                            >
                                                {({ open }) => (
                                                    <fieldset>
                                                        <legend className="w-full px-2">
                                                            <Disclosure.Button className="flex items-center justify-between w-full p-2 text-gray-400 hover:text-gray-500">
                                                                <span className="text-sm font-medium text-gray-900">
                                                                    {section.name}
                                                                </span>
                                                                <span className="flex items-center ml-6 h-7">
                                                                    <ChevronDownIcon
                                                                        className={classNames(
                                                                            open
                                                                                ? '-rotate-180'
                                                                                : 'rotate-0',
                                                                            'h-5 w-5 transform',
                                                                        )}
                                                                        aria-hidden="true"
                                                                    />
                                                                </span>
                                                            </Disclosure.Button>
                                                        </legend>
                                                        <Disclosure.Panel className="px-4 pt-4 pb-2">
                                                            <div className="space-y-6">
                                                                {section.options.map(
                                                                    (option, optionIdx) => (
                                                                        <div
                                                                            key={option.value}
                                                                            className="flex items-center"
                                                                        >
                                                                            <input
                                                                                id={`${section.id}-${optionIdx}-mobile`}
                                                                                name={`${section.id}[]`}
                                                                                defaultValue={
                                                                                    option.value
                                                                                }
                                                                                type="checkbox"
                                                                                className="w-4 h-4 border-gray-300 rounded text-brand-primary focus:ring-brand-primary"
                                                                            />
                                                                            <label
                                                                                htmlFor={`${section.id}-${optionIdx}-mobile`}
                                                                                className="ml-3 text-sm text-gray-500"
                                                                            >
                                                                                {option.label}
                                                                            </label>
                                                                        </div>
                                                                    ),
                                                                )}
                                                            </div>
                                                        </Disclosure.Panel>
                                                    </fieldset>
                                                )}
                                            </Disclosure>
                                        ))}
                                    </form>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </Dialog>
                </Transition.Root>
                <div className="max-w-2xl px-4 mx-auto lg:max-w-7xl lg:px-8">
                    <div className="pt-24 pb-10 border-b border-gray-200">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900">{title}</h1>
                        <p className="mt-4 text-base text-gray-500">{description}</p>
                    </div>
                    <div className="pt-12 pb-24 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
                        <aside>
                            <h2 className="sr-only">Filters</h2>
                            <button
                                type="button"
                                className="inline-flex items-center lg:hidden"
                                onClick={() => setMobileFiltersOpen(true)}
                            >
                                <span className="text-sm font-medium text-gray-700">Filters</span>
                                <PlusIcon
                                    className="flex-shrink-0 w-5 h-5 ml-1 text-gray-400"
                                    aria-hidden="true"
                                />
                            </button>
                            <div className="hidden lg:block">
                                <form className="space-y-10 divide-y divide-gray-200">
                                    {filters.map((section, sectionIdx) => (
                                        <div
                                            key={section.name}
                                            className={sectionIdx === 0 ? null : 'pt-10'}
                                        >
                                            <fieldset>
                                                <legend className="block text-sm font-medium text-gray-900">
                                                    {section.name}
                                                </legend>
                                                <div className="pt-6 space-y-3">
                                                    {section.options.map((option, optionIdx) => (
                                                        <div
                                                            key={option.value}
                                                            className="flex items-center"
                                                        >
                                                            <input
                                                                id={`${section.id}-${optionIdx}`}
                                                                name={`${section.id}[]`}
                                                                defaultValue={option.value}
                                                                type="checkbox"
                                                                className="w-4 h-4 border-gray-300 rounded text-brand-primary focus:ring-brand-primary"
                                                            />
                                                            <label
                                                                htmlFor={`${section.id}-${optionIdx}`}
                                                                className="ml-3 text-sm text-gray-600"
                                                            >
                                                                {option.label}
                                                            </label>
                                                        </div>
                                                    ))}
                                                </div>
                                            </fieldset>
                                        </div>
                                    ))}
                                </form>
                            </div>
                        </aside>
                        <section
                            aria-labelledby="product-heading"
                            className="mt-6 lg:col-span-2 lg:mt-0 xl:col-span-3"
                        >
                            <h2 id="product-heading" className="sr-only">
                                Products
                            </h2>
                            <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8">
                                {products.map((product) => (
                                    <div
                                        key={product.id}
                                        className="relative flex flex-col overflow-hidden bg-white border border-gray-200 rounded-lg group"
                                    >
                                        <div className="bg-gray-200 aspect-h-4 aspect-w-3 sm:aspect-none group-hover:opacity-75 sm:h-96">
                                            <img
                                                src={product.imageSrc}
                                                alt={product.imageAlt}
                                                className="object-cover object-center w-full h-full sm:h-full sm:w-full"
                                            />
                                        </div>
                                        <div className="flex flex-col flex-1 p-4 space-y-2">
                                            <h3 className="text-sm font-medium text-gray-900">
                                                <a href={product.href}>
                                                    <span
                                                        aria-hidden="true"
                                                        className="absolute inset-0"
                                                    />
                                                    {product.name}
                                                </a>
                                            </h3>
                                            <p className="text-sm text-gray-500">
                                                {product.description}
                                            </p>
                                            <div className="flex flex-col justify-end flex-1">
                                                <p className="text-sm italic text-gray-500">
                                                    {product.options}
                                                </p>
                                                <p className="text-base font-medium text-gray-900">
                                                    {product.price}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default KitchenRangeContent
