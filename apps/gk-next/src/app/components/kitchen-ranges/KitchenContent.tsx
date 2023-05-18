/* eslint-disable @next/next/no-img-element */
'use client'

import { useMemo } from 'react'
import Image from 'next/image'
import { Disclosure, Tab } from '@headlessui/react'
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

import { useKitchens } from 'stores/kitchen'
import { classNames } from 'utils/tailwind/classNames'
import { ButtonLink } from 'components/button/Button'
import CTASection from 'components/cta/CTASection'

type KitchenContentProps = {
    type: 'Modern' | 'Traditional'
}

export default function KitchenContent(props: KitchenContentProps) {
    const { type } = props

    const { kitchen, getKitchensByType } = useKitchens()
    const filteredKitchens = getKitchensByType(type)
        .filter((k) => k.fields.slug !== kitchen.fields.slug)
        .slice(0, 3)
    const kitchenType = useMemo(() => type.toLowerCase(), [type])

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl sm:px-6 sm:pt-16 lg:px-8">
                <div className="max-w-2xl mx-auto md:max-w-none">
                    {/* Kitchen */}
                    <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                        {/* Image gallery */}
                        <Tab.Group as="div" className="flex flex-col-reverse">
                            {/* Image selector */}
                            <div className="hidden w-full max-w-2xl mx-auto mt-6 sm:block md:max-w-none">
                                <Tab.List className="grid grid-cols-4 gap-6">
                                    {kitchen.fields.images.map((image, index) => (
                                        <Tab
                                            key={index}
                                            className="relative flex items-center justify-center h-24 text-sm text-gray-900 uppercase bg-white cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-brand-primary focus:ring-opacity-50 focus:ring-offset-4"
                                        >
                                            {({ selected }) => (
                                                <>
                                                    <span className="sr-only">
                                                        {image.fields.description}
                                                    </span>
                                                    <span className="absolute inset-0 overflow-hidden">
                                                        <Image
                                                            src={`https:${image.fields.file.url}`}
                                                            alt={image.fields.title}
                                                            className="object-cover object-center w-full h-full"
                                                            fill
                                                        />
                                                    </span>
                                                    <span
                                                        className={classNames(
                                                            selected
                                                                ? 'ring-brand-primary'
                                                                : 'ring-transparent',
                                                            'pointer-events-none absolute inset-0 ring-2 ring-offset-2',
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
                                {kitchen.fields.images.map((image, index) => (
                                    <Tab.Panel key={index}>
                                        <Zoom>
                                            <img
                                                src={`https:${image.fields.file.url}`}
                                                alt={image.fields.title}
                                                className="object-cover object-center w-full h-full"
                                            />
                                        </Zoom>
                                    </Tab.Panel>
                                ))}
                            </Tab.Panels>
                        </Tab.Group>
                        {/* Product info */}
                        <div className="px-4 mt-10 sm:mt-16 sm:px-0 lg:mt-0">
                            <h1 className="text-3xl tracking-tight text-gray-900">
                                {kitchen.fields.name}
                            </h1>
                            <div className="mt-2">
                                <h2 className="sr-only">Kitchen information</h2>
                            </div>
                            {kitchen.fields?.kitchenStyle && (
                                <div className="text-xl text-gray-500 capitalize">
                                    {kitchen.fields.kitchenStyle} Kitchen Style
                                </div>
                            )}
                            <div className="mt-6">
                                <h3 className="sr-only">Description</h3>
                                <div className="space-y-6 text-base text-gray-700">
                                    {documentToReactComponents(kitchen.fields.description as any)}
                                </div>
                            </div>
                            <section aria-labelledby="details-heading" className="mt-12">
                                <h2 id="details-heading" className="sr-only">
                                    Additional details
                                </h2>
                                <div className="border-t divide-y divide-gray-200">
                                    <Disclosure as="div">
                                        {({ open }) => (
                                            <>
                                                <h3>
                                                    <Disclosure.Button className="relative flex items-center justify-between w-full py-6 text-left group">
                                                        <span
                                                            className={classNames(
                                                                open
                                                                    ? 'text-brand-primary'
                                                                    : 'text-gray-900',
                                                                'text-sm',
                                                            )}
                                                        >
                                                            At a glance
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
                                                    {kitchen.fields?.kitchenStyle && (
                                                        <div className="mb-2 capitalize">
                                                            <span className="font-bold">
                                                                Kitchen Style: &nbsp;
                                                            </span>
                                                            {kitchen.fields.kitchenStyle}
                                                        </div>
                                                    )}
                                                    {kitchen.fields?.doorType && (
                                                        <div className="mb-2 capitalize">
                                                            <span className="font-bold">
                                                                Door Type: &nbsp;
                                                            </span>
                                                            {kitchen.fields.doorType}
                                                        </div>
                                                    )}
                                                    <div className="mb-2 capitalize">
                                                        <span className="font-bold">
                                                            Handleless: &nbsp;
                                                        </span>
                                                        {kitchen.fields?.handleless ? 'Yes' : 'No'}
                                                    </div>
                                                    {kitchen.fields?.size && (
                                                        <div className="mb-2 capitalize">
                                                            <span className="font-bold">
                                                                Size: &nbsp;
                                                            </span>
                                                            {kitchen.fields.size}
                                                        </div>
                                                    )}
                                                    <div>
                                                        <span className="font-bold">
                                                            Price Group: &nbsp;
                                                        </span>
                                                        {kitchen.fields.priceGroup}
                                                    </div>
                                                </Disclosure.Panel>
                                            </>
                                        )}
                                    </Disclosure>
                                    {kitchen.fields?.stockedColours?.length > 0 && (
                                        <Disclosure as="div">
                                            {({ open }) => (
                                                <>
                                                    <h3>
                                                        <Disclosure.Button className="relative flex items-center justify-between w-full py-6 text-left group">
                                                            <span
                                                                className={classNames(
                                                                    open
                                                                        ? 'text-brand-primary'
                                                                        : 'text-gray-900',
                                                                    'text-sm',
                                                                )}
                                                            >
                                                                Stocked Colours
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
                                                        <div className="flex flex-wrap items-center gap-3">
                                                            {kitchen.fields.stockedColours.map(
                                                                (colour, index) => {
                                                                    return (
                                                                        <span
                                                                            key={index}
                                                                            style={{
                                                                                backgroundColor:
                                                                                    colour,
                                                                            }}
                                                                            title={colour}
                                                                            className="inline-block w-12 h-12 border border-black rounded-full border-opacity-10"
                                                                        />
                                                                    )
                                                                },
                                                            )}
                                                        </div>
                                                    </Disclosure.Panel>
                                                </>
                                            )}
                                        </Disclosure>
                                    )}
                                    {kitchen.fields?.otherColours?.length > 0 && (
                                        <Disclosure as="div">
                                            {({ open }) => (
                                                <>
                                                    <h3>
                                                        <Disclosure.Button className="relative flex items-center justify-between w-full py-6 text-left group">
                                                            <span
                                                                className={classNames(
                                                                    open
                                                                        ? 'text-brand-primary'
                                                                        : 'text-gray-900',
                                                                    'text-sm',
                                                                )}
                                                            >
                                                                Other Colours
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
                                                        <div className="flex flex-wrap items-center gap-3">
                                                            {kitchen.fields.otherColours.map(
                                                                (colour, index) => {
                                                                    return (
                                                                        <span
                                                                            key={index}
                                                                            style={{
                                                                                backgroundColor:
                                                                                    colour,
                                                                            }}
                                                                            title={colour}
                                                                            className="inline-block w-12 h-12 border border-black rounded-full border-opacity-10"
                                                                        />
                                                                    )
                                                                },
                                                            )}
                                                        </div>
                                                    </Disclosure.Panel>
                                                </>
                                            )}
                                        </Disclosure>
                                    )}
                                    {kitchen.fields?.finishes?.length > 0 && (
                                        <Disclosure as="div">
                                            {({ open }) => (
                                                <>
                                                    <h3>
                                                        <Disclosure.Button className="relative flex items-center justify-between w-full py-6 text-left group">
                                                            <span
                                                                className={classNames(
                                                                    open
                                                                        ? 'text-brand-primary'
                                                                        : 'text-gray-900',
                                                                    'text-sm',
                                                                )}
                                                            >
                                                                Finishes
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
                                                        <div className="flex flex-wrap items-center gap-3">
                                                            {kitchen.fields.finishes.map(
                                                                (finish, index) => {
                                                                    return (
                                                                        <span
                                                                            key={index}
                                                                            className="relative inline-block w-12 h-12 border border-black rounded-full border-opacity-10"
                                                                        >
                                                                            <Image
                                                                                src={`https:${finish.fields.file.url}`}
                                                                                alt={
                                                                                    finish.fields
                                                                                        .title
                                                                                }
                                                                                title={
                                                                                    finish.fields
                                                                                        .title
                                                                                }
                                                                                fill
                                                                                className="rounded-full"
                                                                            />
                                                                        </span>
                                                                    )
                                                                },
                                                            )}
                                                        </div>
                                                    </Disclosure.Panel>
                                                </>
                                            )}
                                        </Disclosure>
                                    )}
                                </div>
                            </section>
                        </div>
                    </div>
                    <CTASection
                        className="border-t border-gray-200 lg:pt-40 mt-sm pt-28 lg:mt-lg md:pb-0 md:pt-28"
                        title="Kitchen Brochure"
                        image="/assets/home/kitchen-brochure.png"
                        description={`With our essential kitchen planning guide, it doesn't have to
                be. We'll walk you through some of our customer's commonly
                asked questions and guide you through our process of creating your
                very own unique kitchen.`}
                        button={<ButtonLink href="/learn-more">Request a Brochure</ButtonLink>}
                    />
                    <section
                        aria-labelledby="related-heading"
                        className="px-4 border-gray-200 lg:border-t py-sm lg:py-lg sm:px-0 lg:mt-lg"
                    >
                        <h2 id="related-heading" className="text-xl text-gray-900">
                            You might also like
                        </h2>
                        <div className="grid grid-cols-1 mt-8 gap-y-12 sm:gap-x-6 md:grid-cols-3 xl:gap-x-8">
                            {filteredKitchens.map((kitchen, index) => (
                                <div key={index}>
                                    <div className="relative">
                                        <div className="relative w-full overflow-hidden h-72">
                                            <Image
                                                src={`https:${kitchen.fields.images[0].fields.file.url}`}
                                                alt={kitchen.fields.images[0].fields.title}
                                                className="object-cover object-center w-full h-full"
                                                fill
                                            />
                                        </div>
                                        <div className="relative mt-4">
                                            <h3 className="text-sm text-gray-900">
                                                {kitchen.fields.name}
                                            </h3>
                                            {kitchen.fields?.kitchenStyle && (
                                                <p className="mt-1 text-sm text-gray-500 capitalize">
                                                    {kitchen.fields.kitchenStyle} Kitchen Style
                                                </p>
                                            )}
                                        </div>
                                        <div className="absolute inset-x-0 top-0 flex items-end justify-end p-4 overflow-hidden h-72">
                                            <div
                                                aria-hidden="true"
                                                className="absolute inset-x-0 bottom-0 opacity-50 h-36 bg-gradient-to-t from-black"
                                            />
                                        </div>
                                    </div>
                                    <ButtonLink
                                        href={`/kitchen-ranges/${kitchenType}-kitchens/${kitchen.fields.slug}`}
                                        className="w-full mt-4 text-center"
                                    >
                                        View Kitchen Range
                                    </ButtonLink>
                                </div>
                            ))}
                        </div>
                    </section>
                    <CTASection
                        className="border-t border-gray-200 lg:py-40 pt-28 md:pt-28"
                        title="Kitchen Brochure"
                        image="/assets/home/kitchen-brochure.png"
                        description={`With our essential kitchen planning guide, it doesn't have to
                be. We'll walk you through some of our customer's commonly
                asked questions and guide you through our process of creating your
                very own unique kitchen.`}
                        button={<ButtonLink href="/learn-more">Request a Brochure</ButtonLink>}
                    />
                </div>
            </div>
        </div>
    )
}
