import { ButtonLink } from 'components/button/Button'
import Hero from 'components/hero/Hero'
import TextImage from 'components/text-image/TextImage'
import CTASection from 'components/cta/CTASection'

export const metadata = {
    title: 'Our Process | Garrett Kitchens',
}

export default function Page() {
    return (
        <>
            <Hero
                className=""
                subTitle=""
                title="Our Process"
                image="/assets/home/hero/hero.png"
                description={`With a wide choice of colours, styles, and finishing features, our Kitchen Brochure showcases all the products we offer in designing your dream kitchen.`}
                button={
                    <ButtonLink href="/request-a-free-brochure">
                        Start Your Journey <span aria-hidden="true">&rarr;</span>
                    </ButtonLink>
                }
            />

            <TextImage
                className=""
                subTitle=""
                title="1. Book a Survey"
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
                subTitle=""
                title="2. Visit Our Showroom"
                image="/assets/home/hero/hero.png"
                alt="Some image"
                button=""
                description={`With a wide choice of colours, styles, and finishing features, our Kitchen Brochure showcases all the products we offer in designing your dream kitchen.
                With a wide choice of colours, styles, and finishing features, our Kitchen Brochure showcases all the products we offer in designing your dream kitchen.`}
            />

            <TextImage
                className=""
                subTitle=""
                title="3. Finalise Your Design"
                image="/assets/home/hero/hero.png"
                alt="Some image"
                flipped
                button=""
                whiteBg
                description={`With a wide choice of colours, styles, and finishing features, our Kitchen Brochure showcases all the products we offer in designing your dream kitchen.
                With a wide choice of colours, styles, and finishing features, our Kitchen Brochure showcases all the products we offer in designing your dream kitchen.`}
            />

            <TextImage
                subTitle=""
                className=""
                title="4. Place Your Order"
                image="/assets/home/hero/hero.png"
                alt="Some image"
                description={`With a wide choice of colours, styles, and finishing features, our Kitchen Brochure showcases all the products we offer in designing your dream kitchen.
                With a wide choice of colours, styles, and finishing features, our Kitchen Brochure showcases all the products we offer in designing your dream kitchen.`}
                button={
                    <ButtonLink href="/request-a-free-brochure">
                        Start your journey <span aria-hidden="true">&rarr;</span>
                    </ButtonLink>
                }
            />

            <CTASection
                className="pt-28 md:pt-28 lg:py-32"
                title="Need some design inspiration?"
                image="/assets/home/brochureImg.jpg"
                description={`With a wide variety of styles, colours, and features, our Kitchen Brochure is
                sure to inspire you with ideas for your next, unique kitchen.`}
                whiteBg
                button={<ButtonLink href="/request-a-free-brochure">Request a Brochure</ButtonLink>}
            />
        </>
    )
}
