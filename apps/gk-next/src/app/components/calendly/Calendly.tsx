'use client'

import { InlineWidget } from 'react-calendly'

type CalendlyProps = {
    url: string
}

export default function Calendly(props: CalendlyProps) {
    const { url } = props

    return (
        <section id="calendly" className="py-sm lg:py-lg lg:pt-sm">
            <InlineWidget url={url} />
        </section>
    )
}
