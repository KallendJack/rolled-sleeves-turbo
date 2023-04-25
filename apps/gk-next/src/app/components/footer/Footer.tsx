import Link from 'next/link'

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
        <footer className="bg-brand-primaryBg" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="px-4 py-16 mx-auto md:px-6 max-w-7xl lg:px-8 lg:py-28">
                <div className="col-span-2 lg:grid lg:grid-cols-2 xl:gap-8">
                    <div>
                        <h3 className="text-2xl leading-6 tracking-widest uppercase lg:text-3xl text-brand-secondary">
                            About Us
                        </h3>
                        <p className="mt-4 text-sm text-gray-300">
                            Garrett Kitchens are an independent kitchen retailer who design, supply
                            &amp; install kitchens and other built in furniture. Working with
                            international manufactures allows us to provide exceptional value for a
                            range of styles and budgets.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-8 mt-12 justify-items-start lg:justify-items-end lg:mt-0">
                        <div className="md:grid md:grid-cols-1 md:gap-8">
                            <div className="mt-4 md:mt-0">
                                <h3 className="text-2xl leading-6 tracking-widest uppercase lg:text-3xl text-brand-secondary">
                                    Our Kitchens
                                </h3>
                                <ul role="list" className="mt-4 space-y-2">
                                    {navigation.ourKitchens.map((item) => (
                                        <li key={item.name}>
                                            <Link
                                                href={item.href}
                                                className="text-sm leading-6 text-gray-300 hover:underline"
                                            >
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-1 md:gap-8">
                            <div className="mt-4 md:mt-0">
                                <h3 className="text-2xl leading-6 tracking-widest uppercase lg:text-3xl text-brand-secondary">
                                    Useful Links
                                </h3>
                                <ul role="list" className="mt-4 space-y-2">
                                    {navigation.usefulLinks.map((item) => (
                                        <li key={item.name}>
                                            <Link
                                                href={item.href}
                                                target={item?.target}
                                                className="text-sm leading-6 text-gray-300 hover:underline"
                                            >
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-4 bg-brand-greyBg lg:py-6">
                <div className="px-4 mx-auto md:px-6 max-w-7xl lg:px-8">
                    <div className="flex flex-col gap-8 md:items-end gap-y-2 md:flex-row md:justify-between">
                        <div className="md:flex-1 lg:flex-auto">
                            <p className="text-xs leading-5 text-gray-900">
                                <span className="block mb-2 lg:mb-0">
                                    Garrett Kitchens is a trading name of Garrett Appliances
                                    Limited; a company registered in England.
                                </span>
                                © Copyright 2013-23, Garrett Appliances Ltd - All Rights Reserved.
                            </p>
                        </div>
                        <p className="justify-end flex-1 text-xs leading-5 text-gray-900 lg:flex-auto md:flex">
                            Company Reg. No. 8585642<br></br>VAT Reg. No. GB 165 4164 09
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
