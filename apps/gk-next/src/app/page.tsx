import Image from 'next/image'

import Button from 'components/button/Button'

export const metadata = {
    title: 'Home | Garrett Kitchens',
}

export default function Page() {
    return (
        <>
            <section className="relative bg-gray-900">
                {/* Decorative image and overlay */}
                <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
                    <Image
                        fill
                        priority
                        src="/assets/home/hero/hero.png"
                        alt="Hero Image"
                        className="object-cover object-center w-full h-full"
                    />
                </div>
                <div aria-hidden="true" className="absolute inset-0 bg-gray-900 opacity-50" />

                <div className="relative flex flex-col items-center max-w-3xl px-6 py-32 mx-auto text-center sm:py-64 lg:px-0">
                    <h1 className="text-4xl font-bold tracking-tight text-white lg:text-6xl">
                        Innovative Designs, Quality Craftmanship
                    </h1>
                    <p className="mt-4 text-xl text-white">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae fugit
                        minus a porro. Quis recusandae esse rerum reprehenderit fuga. Deleniti
                        provident.
                    </p>
                    <Button href="/learn-more">Learn More</Button>
                </div>
            </section>
        </>
    )
}
