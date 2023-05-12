import { HTMLAttributes } from 'react'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'

type HeroSectionProps = HTMLAttributes<HTMLDivElement> & {
    title: string
    image: string
    description: string
    button: React.ReactNode
}

export default function HeroSection(props: HeroSectionProps) {
    const { title, image, description, button, className = '' } = props

    return (
        <section className={twMerge('relative bg-gray-900', className)}>
            <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
                <Image
                    fill
                    priority
                    src={image}
                    alt="Hero"
                    className="object-cover object-center w-full h-full"
                />
            </div>

            <div aria-hidden="true" className="absolute inset-0 bg-gray-900 opacity-50" />
            <div className="relative flex flex-col items-center max-w-4xl px-6 py-32 mx-auto text-center sm:py-64 lg:px-0">
                <h1 className="text-4xl tracking-tight text-white lg:text-6xl">{title}</h1>

                <p className="mt-4 text-xl text-gray-300 mb-4">{description}</p>

                {button}
            </div>
        </section>
    )
}