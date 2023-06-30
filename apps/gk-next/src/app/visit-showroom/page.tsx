import dynamic from 'next/dynamic'
import Image from 'next/image'

import TextVideo from 'components/text-video/TextVideo'
import GoogleMap from 'components/map/GoogleMap'
import FourStep from 'components/four-step/FourStep'

export const metadata = {
    title: 'Visit Showroom | Garrett Kitchens',
}

const CalendlyPopupButton = dynamic(() => import('../components/calendly/CalendlyPopupButton'), {
    ssr: false,
})

export default async function Page() {
    return (
        <>
            <TextVideo
                title="Visit Our Showroom"
                text={`While you can explore our kitchen ranges online or with our brochure,
                nothing compares to experiencing the quality of our kitchens firsthand at
                our dedicated showroom. Here, you’ll have the opportunity to see them up
                close and personal, accompanied by your designer who will be readily
                available to answer any questions, offer expert advice, and help you turn
                your dream kitchen into reality.`}
                button={
                    <CalendlyPopupButton
                        url="https://calendly.com/garrettkitchens/book-showroom-visit"
                        text="Book Appointment"
                    />
                }
                image="/assets/showroom/Video Thumbnail.jpg"
                videoId="TxdhpRPptY0"
                channel="youtube"
            />
            <GoogleMap />
            <div className="overflow-hidden py-sm lg:py-lg">
                <div className="px-4 mx-auto md:px-6 max-w-7xl lg:flex lg:px-8">
                    <div className="grid grid-cols-1 mx-auto gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:flex-none lg:gap-y-8">
                        <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                Kitchens on display
                            </h2>
                            <p className="mt-6 text-xl leading-8 text-gray-600">
                                Our showroom hosts a variety of unique displays for you to look at
                                and walk around. Take your time to appreciate the finer details of
                                elegant cabinet handles, premium worktops, functional internal
                                storage solutions, and more. These features are sure to ignite your
                                imagination and inspire your own kitchen design.
                            </p>
                            <p className="mt-6 text-xl leading-7 text-gray-600">
                                As official partners of renowned brands like Neff, Bosch, and
                                Quooker, our showroom proudly showcases an extensive range of
                                appliances, fully functional and ready for you to experience
                                firsthand. Feel the quality, test the functionality, and immerse
                                yourself in the possibilities before making that all-important
                                decision.
                            </p>
                        </div>
                        <div className="flex flex-wrap items-start justify-end max-w-2xl gap-6 sm:gap-8 lg:contents">
                            <div className="flex-auto w-0 lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                                <div className="relative aspect-[7/5] w-[37rem] max-w-none bg-gray-50 object-cover">
                                    <Image
                                        src="/assets/showroom/Kitchens on display 1.jpg"
                                        alt=""
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                            <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                                <div className="flex self-end justify-end flex-none order-first w-64 lg:w-auto">
                                    <div className="relative aspect-[4/3] w-[24rem] max-w-none flex-none bg-gray-50 ">
                                        <Image
                                            src="/assets/showroom/Kitchens on display 2.jpg"
                                            alt=""
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                                <div className="flex justify-end flex-auto w-96 lg:w-auto lg:flex-none">
                                    <div className="relative aspect-[7/5] w-[37rem] max-w-none flex-none bg-gray-50">
                                        <Image
                                            src="/assets/showroom/Kitchens on display 3.jpg"
                                            alt=""
                                            fill
                                            className="object-cover "
                                        />
                                    </div>
                                </div>
                                <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                                    <div className="relative aspect-[4/3] w-[24rem] max-w-none bg-gray-50">
                                        <Image
                                            src="/assets/showroom/Kitchens on display 4.jpg"
                                            alt=""
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FourStep />
        </>
    )
}
