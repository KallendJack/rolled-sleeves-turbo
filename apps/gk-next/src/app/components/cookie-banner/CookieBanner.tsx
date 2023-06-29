'use client'

import { useState, useEffect } from 'react'

import { Button } from 'components/button/Button'

export default function CookieBanner() {
    const [showBanner, setShowBanner] = useState(false)

    const handleAcceptCookies = () => {
        sessionStorage.setItem('garrettCookiesAccepted', 'yes')
        setShowBanner(false)
    }

    const handleRejectCookies = () => {
        sessionStorage.setItem('garrettCookiesAccepted', 'no')
        setShowBanner(false)
    }

    useEffect(() => {
        const garrettCookiesAccepted = sessionStorage.getItem('garrettCookiesAccepted')

        if (garrettCookiesAccepted) {
            setShowBanner(false)
        } else {
            setShowBanner(true)
        }
    }, [])

    if (showBanner)
        return (
            <div className="fixed inset-x-0 bottom-0 z-50 flex flex-col justify-between p-6 bg-white gap-x-8 gap-y-4 ring-1 ring-gray-900/10 md:flex-row md:items-center lg:px-8">
                <p className="max-w-4xl text-sm leading-6 text-gray-900">
                    We use cookies to ensure that we give you the best experience on the Garrett
                    Kitchens website. By continuing, you agree to our use of cookies. See our&nbsp;
                    <a href="/privacy-policy" className="font-semibold text-brand-primary">
                        privacy policy.
                    </a>
                    .
                </p>
                <div className="flex items-center flex-none gap-x-5">
                    <Button onClick={handleAcceptCookies} className="border border-brand-primary">
                        Accept all
                    </Button>
                    <Button
                        onClick={handleRejectCookies}
                        className="text-gray-900 uppercase transition-colors bg-white border border-gray-500 hover:text-white hover:bg-brand-primaryFocus focus:bg-brand-primaryHover"
                    >
                        Reject all
                    </Button>
                </div>
            </div>
        )

    return null
}
