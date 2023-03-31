const navigation = {
    ourKitchens: [
        { name: 'Real Kitchens', href: '/real-kitchens' },
        { name: 'Modern Kitchens', href: '/modern-kitchens' },
        { name: 'Traditional Kitchens', href: '/traditional-kitchens' },
    ],
    usefulLinks: [
        { name: 'Contact Us', href: '/contact-us' },
        { name: 'Privacy Policy', href: '/privacy-policy' },
        { name: 'Customer Care', href: '/customer-care' },
        { name: 'Buy Appliances Online', target: '_blank', href: 'https://www.gadirect.co.uk/' },
    ],
}

export default function Footer() {
    return (
        <footer className="bg-brand-footer" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="px-6 pt-16 pb-8 mx-auto max-w-7xl sm:pt-24 lg:px-8 lg:py-28">
                <div className="col-span-2 lg:grid lg:grid-cols-2 xl:gap-8">
                    <div>
                        <h3 className="text-2xl font-semibold leading-6 text-white lg:text-3xl">
                            About Us
                        </h3>
                        <p className="mt-4 text-sm text-gray-900">
                            Garrett Kitchens are an independent kitchen retailer who design, supply
                            &amp; install kitchens and other built in furniture. Working with
                            international manufactures allows us to provide exceptional value for a
                            range of styles and budgets.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-8 mt-12 justify-items-start lg:justify-items-end lg:mt-0">
                        <div className="md:grid md:grid-cols-1 md:gap-8">
                            <div className="mt-4 md:mt-0">
                                <h3 className="text-2xl font-semibold leading-6 text-white lg:text-3xl">
                                    Our Kitchens
                                </h3>
                                <ul role="list" className="mt-4 space-y-2">
                                    {navigation.ourKitchens.map((item) => (
                                        <li key={item.name}>
                                            <a
                                                href={item.href}
                                                className="text-sm leading-6 text-gray-900 hover:underline"
                                            >
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-1 md:gap-8">
                            <div className="mt-4 md:mt-0">
                                <h3 className="text-2xl font-semibold leading-6 text-white lg:text-3xl">
                                    Useful Links
                                </h3>
                                <ul role="list" className="mt-4 space-y-2">
                                    {navigation.usefulLinks.map((item) => (
                                        <li key={item.name}>
                                            <a
                                                href={item.href}
                                                target={item?.target}
                                                className="text-sm leading-6 text-gray-900 hover:underline"
                                            >
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-4 bg-brand-darkGreen lg:py-6">
                <div className="px-6 mx-auto max-w-7xl lg:px-8">
                    <div className="flex flex-col gap-8 md:items-end gap-y-2 md:flex-row md:justify-between">
                        <div>
                            <p className="text-xs leading-5 text-gray-900">
                                Garrett Kitchens is a trading name of Garrett Appliances Limited; a
                                company registered in England.<br></br>© Copyright 2013-23, Garrett
                                Appliances Ltd - All Rights Reserved.
                            </p>
                        </div>
                        <p className="text-xs leading-5 text-gray-900">
                            Company Reg. No. 8585642<br></br>VAT Reg. No. GB 165 4164 09
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
