'use client'

import type { HTMLAttributes } from 'react'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'
import { PlayCircleIcon } from '@heroicons/react/20/solid'

import { useModalVideo } from 'stores/modal'

type TextVideoProps = HTMLAttributes<HTMLDivElement> & {
    title: string
    text: string
    button: React.ReactNode
    image: string
    videoId: string
    channel: 'youtube' | 'vimeo'
}

export default function TextVideo(props: TextVideoProps) {
    const { title, text, button, image, videoId, channel, className = '' } = props

    const { setVideoId, setChannel, toggle } = useModalVideo()

    return (
        <section className={twMerge('overflow-hidden py-sm lg:py-lg', className)}>
            <div className="px-4 mx-auto max-w-7xl md:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-center">
                    <div>
                        <div className="mx-auto lg:mx-0 lg:max-w-lg">
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                {title}
                            </h2>
                            <p className="my-6 text-lg leading-8 text-gray-600">{text}</p>
                            {button}
                        </div>
                    </div>
                    <div>
                        <div className="relative overflow-hidden sm:mx-auto lg:mx-0 lg:max-w-none">
                            <div className="mx-auto sm:mx-0 sm:max-w-none">
                                <div className="relative aspect-1">
                                    <Image src={image} alt={title} fill />
                                    <PlayCircleIcon
                                        className="absolute w-24 text-white -translate-x-1/2 -translate-y-1/2 cursor-pointer md:w-32 top-1/2 left-1/2"
                                        onClick={(e) => {
                                            e.preventDefault()
                                            setVideoId(videoId)
                                            setChannel(channel)
                                            toggle()
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
