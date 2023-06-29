import Image from 'next/image'

import { ButtonLink } from 'components/button/Button'
import Hero from 'components/hero/Hero'
import TextImage from 'components/text-image/TextImage'
import FourStep from 'components/four-step/FourStep'

export const metadata = {
    title: 'Appliances | Garrett Kitchens',
}

export default function Page() {
    return (
        <>
            <Hero
                className=""
                subTitle="Inspired Designs"
                title="Appliances"
                image="/assets/home/hero/hero.png"
                description={`A luxury kitchen deserves luxury appliances, which is why weve parntered with some of the leading manufactureres of well-respected appliance brands and hand-selected only the very best to install our clients homes. `}
                button={
                    <ButtonLink href="/request-a-free-brochure">
                        Start Your Journey <span aria-hidden="true">&rarr;</span>
                    </ButtonLink>
                }
            />

            <TextImage
                className=""
                subTitle="Modern of classic style"
                title="An Unbeatable Range"
                image="/assets/home/hero/hero.png"
                alt="Some image"
                flipped
                whiteBg
                button=""
                description={`With a wide choice of colours, styles, and finishing features, our Kitchen Brochure showcases all the products we offer in designing your dream kitchen.
                With a wide choice of colours, styles, and finishing features, our Kitchen Brochure showcases all the products we offer in designing your dream kitchen.`}
            />

            <TextImage
                className=""
                subTitle="Options for every lifestyle"
                title="Next Level Appliances"
                image="/assets/home/hero/hero.png"
                alt="Some image"
                button=""
                description={`With a wide choice of colours, styles, and finishing features, our Kitchen Brochure showcases all the products we offer in designing your dream kitchen.
                With a wide choice of colours, styles, and finishing features, our Kitchen Brochure showcases all the products we offer in designing your dream kitchen.`}
            />

            <section className="bg-brand-primaryBg py-sm lg:py-10">
                <div className="px-6 mx-auto max-w-7xl lg:px-8">
                    <h2 className="text-xl leading-8 text-center text-white lg:text-lg">
                        We work with these trusted brands
                    </h2>

                    <div className="grid items-center max-w-xl grid-cols-3 mx-auto mt-4 justify-items-center gap-x-8 gap-y-10 sm:max-w-2xl md:grid-cols-5 sm:gap-x-10 lg:mx-0 lg:max-w-none">
                        <Image
                            className="object-contain w-24 h-10 col-span-1 md:w-28 lg:w-full lg:col-span-1"
                            src="/assets/home/brand-logos/AEG-logo.png"
                            alt="Transistor"
                            width={158}
                            height={48}
                        />
                        <Image
                            className="object-contain w-24 h-12 col-span-1 md:w-28 lg:w-full lg:col-span-1"
                            src="/assets/home/brand-logos/BORA-logo.png"
                            alt="Reform"
                            width={158}
                            height={48}
                        />
                        <Image
                            className="object-contain w-24 h-12 col-span-1 md:w-28 lg:w-full lg:col-span-1"
                            src="/assets/home/brand-logos/Bosch-logo.png"
                            alt="Tuple"
                            width={158}
                            height={48}
                        />
                        <Image
                            className="object-contain w-24 h-12 col-span-1 md:w-28 lg:w-full lg:col-span-1"
                            src="/assets/home/brand-logos/Neff-logo.png"
                            alt="SavvyCal"
                            width={158}
                            height={48}
                        />
                        <Image
                            className="object-contain w-24 h-12 col-span-1 md:w-28 lg:w-40 lg:col-span-1"
                            src="/assets/home/brand-logos/Quooker-logo.png"
                            alt="Statamic"
                            width={158}
                            height={48}
                        />
                    </div>
                </div>
            </section>

            <FourStep whiteBg className=""></FourStep>
        </>
    )
}
