import dynamic from 'next/dynamic'

import HeroSection from 'components/hero/Hero'
import CTASection from 'components/cta/CTASection'
import TextVideo from 'components/text-video/TextVideo'
import ThreeColumnContent from 'components/three-column-content/ThreeColumnContent'
import { ButtonLink } from 'components/button/Button'

export const metadata = {
    title: 'Book a Free Survey | Garrett Kitchens',
}

const CalendlyPopupButton = dynamic(() => import('../components/calendly/CalendlyPopupButton'), {
    ssr: false,
})

export default async function Page() {
    return (
        <>
            <HeroSection
                title="Book a Free Survey"
                description="Click the button below to get started."
                image="/assets/home/hero/hero.png"
                button={
                    <CalendlyPopupButton
                        url="https://calendly.com/garrettkitchens/home-survey"
                        text="Schedule Now"
                    />
                }
            />
            <TextVideo
                title="Start Your Journey"
                text={`The first step towards achieving your dream kitchen is to book a free home
                survey with us. One of our experienced designers will attend and take
                accurate measurements, along with an initial brief. We’ll then start to
                create a design around your budget, lifestyle, and preferences.`}
                button={
                    <CalendlyPopupButton
                        url="https://calendly.com/garrettkitchens/home-survey"
                        text="Schedule Now"
                    />
                }
                image="/assets/book-a-free-survey/Video Thumbnail.jpg"
                videoId="HA5LpO5XcyA"
                channel="youtube"
                className="bg-brand-greyBg"
            />
            <ThreeColumnContent
                title="What will I get from a free home survey?"
                items={[
                    {
                        title: 'Kitchen Measurements',
                        image: '/assets/book-a-free-survey/Kitchen Measurements.jpg',
                        text: `Eliminate the stress of taking your own measurements and leave it to one
                        of our design specialists. Taking accurate measurements of your kitchen
                        space is crucial in terms of making sure your kitchen not only looks great
                        but fits and functions perfectly.`,
                    },
                    {
                        title: 'Consultation With Designer',
                        image: '/assets/book-a-free-survey/Design Consultation.jpg',
                        text: `After taking measurements, your designer will offer advice on how to get
                        the best from your space. We will not only ensure the furniture fits but will
                        also make sure the design works in practice, is functional, and contains all
                        the elements you need.`,
                    },
                    {
                        title: 'Bespoke Design',
                        image: '/assets/book-a-free-survey/Initial Brief.jpg',
                        text: `Using the details from your home survey, we will then create a 3D plan,
                        making adjustments along the way to ensure it is exactly how you want it.
                        You can sit back and relax knowing that every aspect of your new kitchen is
                        going to meet, and exceed, your expectations.`,
                    },
                ]}
            />
            <CTASection
                className="pt-[6.5rem] md:pt-[6.5rem] md:py-sm lg:py-32"
                title="Planning your dream kitchen can be daunting."
                image="/assets/home/kitchen-brochure.png"
                description={`With our essential kitchen planning guide, We'll walk you through some of our customer's commonly asked questions and guide you through the process of creating your very own unique kitchen.`}
                whiteBg
                button={<ButtonLink href="/request-a-free-brochure">Download Guide</ButtonLink>}
            />
        </>
    )
}
