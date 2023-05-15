import { ButtonLink, NormalLink } from 'components/button/Button'
import Calendly from 'components/calendly/Calendly'
import CTASection from 'components/cta/CTASection'
import TextVideo from 'components/text-video/TextVideo'
import ThreeColumnContent from 'components/three-column-content/ThreeColumnContent'

export const metadata = {
    title: 'Book a Free Survey | Garrett Kitchens',
}

export default async function Page() {
    return (
        <>
            <Calendly url="https://calendly.com/garrettkitchens/home-survey" />
            <TextVideo
                title="Start Your Journey"
                text={`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
                impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis
                ratione. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
                impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis
                ratione.`}
                button={<NormalLink href="#calendly">Start Your Journey</NormalLink>}
                image="/assets/home/Survey.png"
                youtubeId="TxdhpRPptY0"
            />
            <ThreeColumnContent
                title="What will I get from a free home survey?"
                items={[
                    {
                        title: 'Kitchen Measurements',
                        image: '/assets/home/Survey.png',
                        text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
                        impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis
                        ratione. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
                        impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis
                        ratione.`,
                    },
                    {
                        title: 'Consultation With Designer',
                        image: '/assets/home/Survey.png',
                        text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
                        impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis
                        ratione. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
                        impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis
                        ratione.`,
                    },
                    {
                        title: 'Initial Brief',
                        image: '/assets/home/Survey.png',
                        text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
                        impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis
                        ratione. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
                        impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis
                        ratione.`,
                    },
                ]}
            />
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
