import Link from 'next/link'
import type { LinkProps } from 'next/link'

type ButtonProps = LinkProps & {
    type?: 'link' | 'button'
    variant?: 'light' | 'dark'
    className?: string
    children: React.ReactNode
}

export default function Button(props: ButtonProps) {
    const { type = 'link', variant = 'light', className = '', children, ...restProps } = props

    return (
        <Link
            className={`inline-block px-6 py-3 text-xs font-thin tracking-widest text-white uppercase bg-brand-primary hover:bg-brand-primary/90 transition-colors ${className}`}
            {...restProps}
        >
            {children}
        </Link>
    )
}
