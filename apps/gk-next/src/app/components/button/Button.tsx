import React, { LinkHTMLAttributes } from 'react'

type ButtonProps = LinkHTMLAttributes<HTMLAnchorElement> & {
    type?: 'link' | 'button'
    variant?: 'light' | 'dark'
    children: React.ReactNode
}

export default function Button(props: ButtonProps) {
    const { type = 'link', variant = 'light', children, ...restProps } = props

    return (
        <a
            className="inline-block px-8 py-3 mt-8 text-base font-medium text-gray-900 border border-transparent rounded-md bg-brand-white hover:bg-gray-100"
            {...restProps}
        >
            {children}
        </a>
    )
}
