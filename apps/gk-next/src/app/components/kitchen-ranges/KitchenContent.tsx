'use client'

import { useState } from 'react'
import { Disclosure, RadioGroup, Tab } from '@headlessui/react'
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import { useKitchens } from 'stores/kitchen'
import { classNames } from 'utils/tailwind/classNames'

const kitchen = {
    name: 'Zip Tote Basket',
    images: [
        {
            id: 1,
            name: 'Angled view',
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg',
            alt: 'Angled front view with bag zipped and handles upright.',
        },
    ],
    colors: [
        { name: 'Washed Black', bgColor: 'bg-gray-700', selectedColor: 'ring-gray-700' },
        { name: 'White', bgColor: 'bg-white', selectedColor: 'ring-gray-400' },
        { name: 'Washed Gray', bgColor: 'bg-gray-500', selectedColor: 'ring-gray-500' },
    ],
    description: `
    <p>The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.</p>
  `,
    details: [
        {
            name: 'At a glance',
            items: [
                'Multiple strap configurations',
                'Spacious interior with top zip',
                'Leather handle and tabs',
                'Interior dividers',
            ],
        },
        {
            name: 'Stocked Colors',
            items: [
                'Multiple strap configurations',
                'Spacious interior with top zip',
                'Leather handle and tabs',
                'Interior dividers',
            ],
        },
        {
            name: 'Other Colors',
            items: [
                'Multiple strap configurations',
                'Spacious interior with top zip',
                'Leather handle and tabs',
                'Interior dividers',
            ],
        },
    ],
}

const relatedKitchens = [
    {
        id: 1,
        name: 'Zip Tote Basket',
        color: 'White and black',
        href: '#',
        imageSrc:
            'https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-01.jpg',
        imageAlt:
            'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
    },
]

export default function KitchenContent() {
    const test = useKitchens((s) => s.kitchen)
    const [selectedColor, setSelectedColor] = useState(kitchen.colors[0])

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl sm:px-6 sm:pt-16 lg:px-8">
                <div className="max-w-2xl mx-auto lg:max-w-none">
                    {/* Kitchen */}
                    <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                        {/* Image gallery */}
                        <Tab.Group as="div" className="flex flex-col-reverse">
                            {/* Image selector */}
                            <div className="hidden w-full max-w-2xl mx-auto mt-6 sm:block lg:max-w-none">
                                <Tab.List className="grid grid-cols-4 gap-6">
                                    {kitchen.images.map((image) => (
                                        <Tab
                                            key={image.id}
                                            className="relative flex items-center justify-center h-24 text-sm font-medium text-gray-900 uppercase bg-white rounded-md cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                                        >
                                            {({ selected }) => (
                                                <>
                                                    <span className="sr-only">{image.name}</span>
                                                    <span className="absolute inset-0 overflow-hidden rounded-md">
                                                        <img
                                                            src={test.fields.image.fields.file.url}
                                                            alt=""
                                                            className="object-cover object-center w-full h-full"
                                                        />
                                                    </span>
                                                    <span
                                                        className={classNames(
                                                            selected
                                                                ? 'ring-brand-primary'
                                                                : 'ring-transparent',
                                                            'pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2',
                                                        )}
                                                        aria-hidden="true"
                                                    />
                                                </>
                                            )}
                                        </Tab>
                                    ))}
                                </Tab.List>
                            </div>

                            <Tab.Panels className="w-full aspect-h-1 aspect-w-1">
                                {kitchen.images.map((image) => (
                                    <Tab.Panel key={image.id}>
                                        <img
                                            src={test.fields.image.fields.file.url}
                                            alt={image.alt}
                                            className="object-cover object-center w-full h-full sm:rounded-lg"
                                        />
                                    </Tab.Panel>
                                ))}
                            </Tab.Panels>
                        </Tab.Group>

                        {/* Product info */}
                        <div className="px-4 mt-10 sm:mt-16 sm:px-0 lg:mt-0">
                            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                                {test.fields.name}
                            </h1>

                            <div className="mt-3">
                                <h2 className="sr-only">Product information</h2>
                            </div>

                            <div className="mt-6">
                                <h3 className="sr-only">Description</h3>

                                <div className="space-y-6 text-base text-gray-700">
                                    {documentToReactComponents(test.fields.description as any)}
                                </div>
                            </div>

                            <form className="mt-6">
                                {/* Colors */}
                                <div>
                                    <h3 className="text-sm text-gray-600">Color</h3>

                                    <RadioGroup
                                        value={selectedColor}
                                        onChange={setSelectedColor}
                                        className="mt-2"
                                    >
                                        <RadioGroup.Label className="sr-only">
                                            Choose a color
                                        </RadioGroup.Label>
                                        <div className="flex items-center space-x-3">
                                            {kitchen.colors.map((color) => (
                                                <RadioGroup.Option
                                                    key={color.name}
                                                    value={color}
                                                    className={({ active, checked }) =>
                                                        classNames(
                                                            color.selectedColor,
                                                            active && checked
                                                                ? 'ring ring-offset-1'
                                                                : '',
                                                            !active && checked ? 'ring-2' : '',
                                                            'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none',
                                                        )
                                                    }
                                                >
                                                    <RadioGroup.Label as="span" className="sr-only">
                                                        {color.name}
                                                    </RadioGroup.Label>
                                                    <span
                                                        aria-hidden="true"
                                                        className={classNames(
                                                            color.bgColor,
                                                            'h-8 w-8 rounded-full border border-black border-opacity-10',
                                                        )}
                                                    />
                                                </RadioGroup.Option>
                                            ))}
                                        </div>
                                    </RadioGroup>
                                </div>
                            </form>

                            <section aria-labelledby="details-heading" className="mt-12">
                                <h2 id="details-heading" className="sr-only">
                                    Additional details
                                </h2>

                                <div className="border-t divide-y divide-gray-200">
                                    {kitchen.details.map((detail) => (
                                        <Disclosure as="div" key={detail.name}>
                                            {({ open }) => (
                                                <>
                                                    <h3>
                                                        <Disclosure.Button className="relative flex items-center justify-between w-full py-6 text-left group">
                                                            <span
                                                                className={classNames(
                                                                    open
                                                                        ? 'text-brand-primary'
                                                                        : 'text-gray-900',
                                                                    'text-sm font-medium',
                                                                )}
                                                            >
                                                                {detail.name}
                                                            </span>
                                                            <span className="flex items-center ml-6">
                                                                {open ? (
                                                                    <MinusIcon
                                                                        className="block w-6 h-6 text-brand-primary group-hover:text-brand-primaryHover"
                                                                        aria-hidden="true"
                                                                    />
                                                                ) : (
                                                                    <PlusIcon
                                                                        className="block w-6 h-6 text-brand-primary group-hover:text-brand-primaryHover"
                                                                        aria-hidden="true"
                                                                    />
                                                                )}
                                                            </span>
                                                        </Disclosure.Button>
                                                    </h3>
                                                    <Disclosure.Panel
                                                        as="div"
                                                        className="pb-6 prose-sm prose"
                                                    >
                                                        <ul role="list">
                                                            {detail.items.map((item) => (
                                                                <li key={item}>{item}</li>
                                                            ))}
                                                        </ul>
                                                    </Disclosure.Panel>
                                                </>
                                            )}
                                        </Disclosure>
                                    ))}
                                </div>
                            </section>
                        </div>
                    </div>

                    <section
                        aria-labelledby="related-heading"
                        className="px-4 py-16 mt-10 border-t border-gray-200 sm:px-0"
                    >
                        <h2 id="related-heading" className="text-xl font-bold text-gray-900">
                            You might also like
                        </h2>

                        <div className="grid grid-cols-1 mt-8 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
                            {relatedKitchens.map((kitchen) => (
                                <div key={kitchen.id}>
                                    <div className="relative">
                                        <div className="relative w-full overflow-hidden rounded-lg h-72">
                                            <img
                                                src={test.fields.image.fields.file.url}
                                                alt={kitchen.imageAlt}
                                                className="object-cover object-center w-full h-full"
                                            />
                                        </div>
                                        <div className="relative mt-4">
                                            <h3 className="text-sm font-medium text-gray-900">
                                                {kitchen.name}
                                            </h3>
                                            <p className="mt-1 text-sm text-gray-500">
                                                {kitchen.color}
                                            </p>
                                        </div>
                                        <div className="absolute inset-x-0 top-0 flex items-end justify-end p-4 overflow-hidden rounded-lg h-72">
                                            <div
                                                aria-hidden="true"
                                                className="absolute inset-x-0 bottom-0 opacity-50 h-36 bg-gradient-to-t from-black"
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}
