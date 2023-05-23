'use client'

import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

type InputProps = React.InputHTMLAttributes<HTMLInputElement>

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const { className = '', ...restProps } = props

    return (
        <input
            ref={ref}
            className={twMerge(
                'block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-primary sm:text-sm sm:leading-6',
                className,
            )}
            {...restProps}
        />
    )
})

Input.displayName = 'Input'

export default Input
