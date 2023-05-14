import { ButtonLink } from 'components/button/Button'
import Calendly from 'components/calendly/Calendly'
import CTASection from 'components/cta/CTASection'

export const metadata = {
    title: 'Book a Free Survey | Garrett Kitchens',
}

export default async function Page() {
    return (
        <>
            <Calendly url="https://calendly.com/garrettkitchens/home-survey" />
            <CTASection
                className="pt-[6.5rem] md:pt-[6.5rem] md:py-sm lg:py-32"
                title="Planning your dream kitchen can be daunting."
                image="/assets/home/kitchen-brochure.png"
                description={`With our essential kitchen planning guide, We'll walk you through some of our customer's commonly asked questions and guide you through the process of creating your very own unique kitchen.`}
                whiteBg
                button={<ButtonLink href="/brochure">Download Guide</ButtonLink>}
            />
        </>
    )
}
