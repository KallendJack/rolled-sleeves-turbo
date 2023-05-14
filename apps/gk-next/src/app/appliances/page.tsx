import Image from 'next/image'
import Link from 'next/link'

import { ButtonLink } from 'components/button/Button'
import Hero from 'components/hero/Hero'
import TextImage from 'components/text-image/TextImage'

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
                    <ButtonLink href="/brochure">
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
        </>
    )
}
