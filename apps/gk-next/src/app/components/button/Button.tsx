import { ButtonHTMLAttributes } from 'react'
import Link from 'next/link'
import type { LinkProps } from 'next/link'

type BaseButtonProps = {
    variantColor?: 'light' | 'dark'
    className?: string
    children: React.ReactNode
}

type ButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLButtonElement>

type ButtonLinkProps = BaseButtonProps & LinkProps

const baseClasses =
    'inline-block px-6 py-3 text-xs tracking-widest text-white uppercase bg-brand-primary hover:bg-brand-primaryHover focus:bg-brand-primaryFocus transition-colors'

export function Button(props: ButtonProps) {
    const { variantColor = 'light', className = '', children, ...restProps } = props

    return (
        <button className={`${baseClasses} ${className}`} {...restProps}>
            {children}
        </button>
    )
}

export function ButtonLink(props: ButtonLinkProps) {
    const { variantColor = 'light', className = '', children, ...restProps } = props

    return (
        <Link className={`${baseClasses} ${className}`} {...restProps}>
            {children}
        </Link>
    )
}
