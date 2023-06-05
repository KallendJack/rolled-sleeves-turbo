'use client'

import { ChevronDoubleDownIcon } from '@heroicons/react/24/outline'

type ScrollToProps = {
    elementId: string
}

export default function ScrollTo(props: ScrollToProps) {
    const { elementId } = props

    return (
        <a
            onClick={(e) => {
                e.preventDefault()

                const yOffset = -Math.abs(document.getElementById('header').offsetHeight)
                const element = document.getElementById(elementId)
                const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset

                window.scrollTo({ top: y, behavior: 'smooth' })
            }}
            className="flex justify-center duration-200 ease-in-out cursor-pointer scroll-smooth"
        >
            <ChevronDoubleDownIcon className="w-8 lg:w-12 bottom-[3%] animate-bounce absolute z-40 text-white" />
        </a>
    )
}
