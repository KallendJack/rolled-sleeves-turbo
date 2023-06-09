'use client'

import React, { useEffect, useCallback, HTMLAttributes } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from '@heroicons/react/24/outline'

type CarouselProps = HTMLAttributes<HTMLDivElement> & {
    testimonials: {
        name: string
        text: string
        image: string
    }[]
}

export const TestimonialCarousel = (props: CarouselProps) => {
    const { testimonials } = props

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    useEffect(() => {
        if (emblaApi) {
            // Access API
        }
    }, [emblaApi])

    return (
        <div className="overflow-hidden">
            <div className="flex flex-col justify-between sm:flex-row">
                <p className="mt-4 text-base text-gray-500">
                    What our customers have to say about us.
                </p>

                <div className="flex mt-4 gap-x-4 sm:mt-0">
                    <ArrowLeftCircleIcon className="w-10" onClick={scrollPrev} />

                    <ArrowRightCircleIcon className="w-10" onClick={scrollNext} />
                </div>
            </div>

            <div ref={emblaRef}>
                <div className="flex mt-4 gap-x-16 sm:mt-12">
                    {testimonials.map((testimonial, index) => (
                        <div className="embla__slide min-w-0 flex-[0_0_100%]" key={index}>
                            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row sm:gap-12">
                                <div className="space-y-4 sm:w-2/4 sm:space-y-8">
                                    <p className="text-gray-500">{testimonial.text}</p>

                                    <h3 className="text-2xl font-semibold text-gray-900">
                                        {testimonial.name}
                                    </h3>
                                </div>

                                <div className="relative w-full sm:w-1/2 h-80">
                                    <Image
                                        className="absolute object-cover"
                                        fill
                                        src={testimonial.image}
                                        alt="Brown leather key ring with brass metal loops and rivets on wood table."
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
