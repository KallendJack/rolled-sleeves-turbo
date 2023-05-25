'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { Button } from 'components/button/Button'
import { Input, Textarea } from 'components/input/Input'

export default function ContactForm() {
    const { register, handleSubmit, reset } = useForm()
    const [formSubmitted, setFormSubmitted] = useState(false)

    const onSubmit = async (data: any) => {
        setFormSubmitted(false)

        const res = await fetch('/api/email', {
            method: 'POST',
            body: JSON.stringify({ formName: 'Contact Form', ...data }),
        })

        if (res) {
            setFormSubmitted(true)
            reset({ firstName: '', lastName: '', email: '', phone: '', message: '', budget: '' })
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                    <Input
                        label="First name"
                        type="text"
                        autoComplete="given-name"
                        required
                        {...register('firstName', { required: true })}
                    />
                </div>
                <div>
                    <Input
                        label="Last name"
                        type="text"
                        autoComplete="family-name"
                        required
                        {...register('lastName', { required: true })}
                    />
                </div>
                <div className="sm:col-span-2">
                    <Input
                        label="Email"
                        type="email"
                        autoComplete="email"
                        required
                        {...register('email', { required: true })}
                    />
                </div>
                <div className="sm:col-span-2">
                    <Input
                        label="Phone"
                        type="tel"
                        autoComplete="tel"
                        aria-describedby="phone-description"
                        {...register('phone')}
                    />
                </div>
                <div className="sm:col-span-2">
                    <Textarea
                        label="How can we help you?"
                        rows={4}
                        aria-describedby="message-description"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-primary sm:text-sm sm:leading-6"
                        defaultValue=""
                        {...register('message', { required: true })}
                    />
                </div>
                <div className="sm:col-span-2">
                    <Input
                        label="Expected Budget"
                        type="text"
                        autoComplete="expected-budget"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-primary sm:text-sm sm:leading-6"
                        {...register('budget')}
                    />
                </div>
            </div>
            <div className="flex justify-end pt-8 mt-10 border-t border-gray-900/10">
                <Button type="submit">Send message</Button>
            </div>
            {formSubmitted && (
                <div className={`mt-5 text-xl text-brand-secondary`}>
                    Thank you for contacting us! We will get back to you as soon as possible.
                </div>
            )}
        </form>
    )
}
