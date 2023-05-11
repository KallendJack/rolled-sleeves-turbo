import { HTMLAttributes } from 'react'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'

type CTASectionProps = HTMLAttributes<HTMLDivElement> & {
    title: string
    image: string
    description: string
    button: React.ReactNode
    flipped?: boolean
    whiteBg?: boolean
}

export default function CTASection(props: CTASectionProps) {
    const {
        title,
        image,
        description,
        button,
        flipped = false,
        whiteBg = false,
        className = '',
    } = props

    return (
        <section
            className={twMerge(
                'pt-12 mx-auto overflow-hidden md:py-12 md:max-w-7xl lg:py-24 lg:px-8',
                className,
            )}
        >
            <div
                className={`pb-sm lg:pb-0 ${
                    whiteBg ? 'bg-white lg:bg-brand-greyBg md:pb-0' : 'bg-brand-greyBg md:pb-6'
                }`}
            >
                <div className="flex flex-col items-center px-4 mx-auto md:px-6 max-w-7xl gap-x-8 gap-y-10 sm:gap-y-8 lg:px-8 lg:flex-row lg:items-stretch">
                    <div
                        className={`w-full max-w-2xl -mt-16 lg:-mb-16 lg:w-96 lg:flex-none ${
                            flipped ? 'order-2' : 'order-1'
                        }`}
                    >
                        <div className="relative aspect-[2/1] h-full lg:mx-0 lg:aspect-auto">
                            <div className="absolute inset-0 object-cover w-full h-full shadow-2xl lg:w-2/6 xl:w-2/5 bg-brand-primaryBg">
                                <Image
                                    fill
                                    src={image}
                                    alt="Call to action image"
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                    <div
                        className={`z-10 w-full max-w-2xl lg:max-w-none lg:flex-auto lg:pr-6 xl:pl-40 lg:py-lg ${
                            flipped ? 'order-1' : 'order-2'
                        }`}
                    >
                        <div className="space-y-4 leading-8 lg:pl-8 lg:space-y-4 sm:leading-9">
                            <h2 className="text-4xl tracking-tight text-gray-900">{title}</h2>
                            <p className="text-base text-gray-500 xl:text-lg">{description}</p>
                            {button}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
