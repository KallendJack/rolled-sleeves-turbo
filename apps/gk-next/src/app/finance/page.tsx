import { ButtonLink } from 'components/button/Button'
import Hero from 'components/hero/Hero'
import TextImage from 'components/text-image/TextImage'
import FourStep from 'components/four-step/FourStep'
import CTASection from 'components/cta/CTASection'
import Image from 'next/image'

export default function Page() {
    return (
        <>
            <Hero
                className=""
                subTitle=""
                title="Finance Options"
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
                subTitle=""
                title="Pay upfront"
                image="/assets/home/hero/hero.png"
                alt="Some image"
                flipped
                button=""
                description={`With a wide choice of colours, styles, and finishing features, our Kitchen Brochure showcases all the products we offer in designing your dream kitchen.
                With a wide choice of colours, styles, and finishing features, our Kitchen Brochure showcases all the products we offer in designing your dream kitchen.`}
            />

            <TextImage
                className=""
                subTitle=""
                title="Buy now, pay later"
                image="/assets/home/hero/hero.png"
                alt="Some image"
                whiteBg
                button=""
                description={`With a wide choice of colours, styles, and finishing features, our Kitchen Brochure showcases all the products we offer in designing your dream kitchen.
                With a wide choice of colours, styles, and finishing features, our Kitchen Brochure showcases all the products we offer in designing your dream kitchen.`}
            />

            <section className="bg-brand-primaryBg py-sm lg:py-10">
                <div className="px-6 mx-auto max-w-7xl lg:px-8">
                    <h2 className="text-xl lg:text-lg leading-8 text-center text-white">
                        We work with these trusted brands
                    </h2>

                    <div className="grid items-center justify-items-center max-w-xl grid-cols-3 mx-auto mt-4 gap-x-8 gap-y-10 sm:max-w-2xl md:grid-cols-5 sm:gap-x-10 lg:mx-0 lg:max-w-none">
                        <Image
                            className="object-contain w-24 md:w-28 lg:w-full col-span-1 md:col-span-2 h-12 lg:col-span-1"
                            src="/assets/home/brand-logos/Aeg-logo.png"
                            alt="Transistor"
                            width={158}
                            height={48}
                        />
                        <Image
                            className="object-contain w-24 md:w-28 lg:w-full col-span-1 md:col-span-2 h-12 lg:col-span-1"
                            src="/assets/home/brand-logos/BORA-logo.png"
                            alt="Reform"
                            width={158}
                            height={48}
                        />
                        <Image
                            className="object-contain w-24 md:w-28 lg:w-full col-span-1 md:col-span-2 h-12 lg:col-span-1"
                            src="/assets/home/brand-logos/Bosch-logo.png"
                            alt="Tuple"
                            width={158}
                            height={48}
                        />
                        <Image
                            className="object-contain w-24 md:w-28 lg:w-full col-span-1 md:col-span-2 h-12 lg:col-span-1"
                            src="/assets/home/brand-logos/Neff-logo.png"
                            alt="SavvyCal"
                            width={158}
                            height={48}
                        />
                        <Image
                            className="object-contain w-24 md:w-28 lg:w-40 col-span-1 md:col-span-2 h-12 lg:col-span-1"
                            src="/assets/home/brand-logos/Quooker-logo.png"
                            alt="Statamic"
                            width={158}
                            height={48}
                        />
                    </div>
                </div>
            </section>

            <FourStep className=""></FourStep>

            <CTASection
                className="pt-[6.5rem] md:pt-[6.5rem] md:py-sm lg:py-32"
                title="Need some design inspiration?"
                image="/assets/home/kitchen-brochure.png"
                description={`With a wide choice of colours, styles, and finishing features, our Kitchen Brochure showcases all the products we offer in designing your dream kitchen.`}
                whiteBg
                button={<ButtonLink href="/request-a-free-brochure">Request a Brochure</ButtonLink>}
            />
        </>
    )
}
