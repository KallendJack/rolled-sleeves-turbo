import dynamic from 'next/dynamic'

import TextVideo from 'components/text-video/TextVideo'
import GoogleMap from 'components/map/GoogleMap'
import Image from 'next/image'

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
                title="Design Your Dream Kitchen"
                text={`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
                impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis
                ratione. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
                impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis
                ratione.`}
                button={
                    <CalendlyPopupButton
                        url="https://calendly.com/garrettkitchens/book-showroom-visit"
                        text="Book Appointment"
                    />
                }
                image="/assets/home/Survey.png"
                videoId="674952430"
                channel="vimeo"
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
                                Quasi est quaerat. Sit molestiae et. Provident ad dolorem occaecati
                                eos iste. Soluta rerum quidem minus ut molestiae velit error quod.
                                Excepturi quidem expedita molestias quas.
                            </p>
                            <p className="mt-6 text-xl leading-7 text-gray-600">
                                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                                fugiat. Quasi aperiam sit non sit neque reprehenderit.
                            </p>
                        </div>
                        <div className="flex flex-wrap items-start justify-end max-w-2xl gap-6 sm:gap-8 lg:contents">
                            <div className="flex-auto w-0 lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                                <div className="relative aspect-[7/5] w-[37rem] max-w-none bg-gray-50 object-cover">
                                    <Image
                                        src="/assets/home/hero/hero.png"
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
                                            src="/assets/home/Showroom-Visit.jpg"
                                            alt=""
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                                <div className="flex justify-end flex-auto w-96 lg:w-auto lg:flex-none">
                                    <div className="relative aspect-[7/5] w-[37rem] max-w-none flex-none bg-gray-50">
                                        <Image
                                            src="/assets/home/Testimonial.jpg"
                                            alt=""
                                            fill
                                            className="object-cover "
                                        />
                                    </div>
                                </div>
                                <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                                    <div className="relative aspect-[4/3] w-[24rem] max-w-none bg-gray-50">
                                        <Image
                                            src="/assets/home/Place-Order.png"
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
        </>
    )
}
