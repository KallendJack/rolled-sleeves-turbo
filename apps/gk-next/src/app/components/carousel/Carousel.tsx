'use client'

import React, { useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'

export const Carousel = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    useEffect(() => {
        if (emblaApi) {
            console.log(emblaApi.slideNodes()) // Access API
        }
    }, [emblaApi])

    return (
        <div className="embla overflow-hidden">
            <div className="flex justify-between">
                <p className="mt-2 text-base text-gray-500">
                    What our customers have to say about us.
                </p>

                <div className="flex gap-x-4">
                    <button className="embla__prev" onClick={scrollPrev}>
                        Prev
                    </button>

                    <button className="embla__next" onClick={scrollNext}>
                        Next
                    </button>
                </div>
            </div>

            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container flex mt-12">
                    <div className="embla__slide min-w-0 flex-[0_0_100%]">
                        <div className="flex justify-between gap-12">
                            <div className="w-2/4 space-y-8">
                                <p className="text-gray-500">
                                    Our simple 4 step process offers our customers a stress-free
                                    journey in achieving their dream kitchen, unique to their
                                    desires. Our simple 4 step process offers our customers a
                                    stress-free journey in achieving their dream kitchen, unique to
                                    their desires.
                                </p>

                                <h3 className="text-2xl font-semibold text-gray-900">John Doe</h3>
                            </div>

                            <div className="w-1/2 relative h-80">
                                <Image
                                    className="absolute object-cover"
                                    fill
                                    src="https://tailwindui.com/img/ecommerce-images/home-page-01-collection-01.jpg"
                                    alt="Brown leather key ring with brass metal loops and rivets on wood table."
                                />
                            </div>
                        </div>
                    </div>
                    <div className="embla__slide min-w-0 flex-[0_0_100%]">Slide 2</div>
                    <div className="embla__slide min-w-0 flex-[0_0_100%]">Slide 3</div>
                </div>
            </div>
        </div>
    )
}
