import Image from 'next/image'

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
        <footer className="bg-brand-white" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>

            <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:py-28">
                <div className="lg:grid lg:grid-cols-2 col-span-2 xl:gap-8">
                    <div>
                        <h3 className="text-xl lg:text-2xl font-semibold leading-6 text-brand-primary">
                            About Us
                        </h3>

                        <p className="text-sm mt-4 text-brand-secondary">
                            Garrett Kitchens are an independent kitchen retailer who design, supply
                            &amp; install kitchens and other built in furniture. Working with
                            international manufactures allows us to provide exceptional value for a
                            range of styles and budgets.
                        </p>
                    </div>
                    <div className="mt-12 grid grid-cols-2 gap-8 justify-items-start lg:justify-items-end lg:mt-0">
                        <div className="md:grid md:grid-cols-1 md:gap-8">
                            <div className="mt-4 md:mt-0">
                                <h3 className="text-xl lg:text-2xl font-semibold leading-6 text-brand-primary">
                                    Our Kitchens
                                </h3>
                                <ul role="list" className="mt-4 space-y-3">
                                    {navigation.ourKitchens.map((item) => (
                                        <li key={item.name}>
                                            <a
                                                href={item.href}
                                                className="text-sm leading-6 text-brand-secondary hover:underline"
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
                                <h3 className="text-xl lg:text-2xl font-semibold leading-6 text-brand-primary">
                                    Useful Links
                                </h3>
                                <ul role="list" className="mt-4 space-y-3">
                                    {navigation.usefulLinks.map((item) => (
                                        <li key={item.name}>
                                            <a
                                                href={item.href}
                                                target={item?.target}
                                                className="text-sm leading-6 text-brand-secondary hover:underline"
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
            <div className="bg-brand-grey py-4 lg:py-6">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="border-t flex flex-col bg-brand-grey md:items-end gap-8 gap-y-2 md:flex-row md:justify-between border-white/10">
                        <div>
                            <p className="text-xs leading-5 text-brand-secondary">
                                Garrett Kitchens is a trading name of Garrett Appliances Limited; a
                                company registered in England.<br></br>© Copyright 2013-23, Garrett
                                Appliances Ltd - All Rights Reserved.
                            </p>
                        </div>

                        <p className="text-xs leading-5 text-brand-secondary">
                            Company Reg. No. 8585642<br></br>VAT Reg. No. GB 165 4164 09
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
