'use client'

import { Button } from 'components/button/Button'
import { PopupButton } from 'react-calendly'

type CalendlyButtonProps = {
    url: string
}

export default function CalendlyButton(props: CalendlyButtonProps) {
    const { url } = props

    return (
        <Button>
            <PopupButton
                url={url}
                rootElement={document.getElementById('body')}
                text="Schedule Now"
                styles={{
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    fontSize: '0.75rem',
                    lineHeight: '1rem',
                }}
            />
        </Button>
    )
}
