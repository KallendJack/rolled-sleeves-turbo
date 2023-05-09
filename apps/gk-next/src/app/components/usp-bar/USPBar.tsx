import Image from 'next/image'

type USPBarProps = {
    items: {
        text: string
        image: string
    }[]
}

export default function USPBar(props: USPBarProps) {
    const { items } = props
    return (
        <section className="w-full bg-brand-primaryBg">
            <dl className="grid grid-cols-3 px-4 py-8 lg:px-8 font-heading text-sm md:text-base text-white font-extralight tracking-widest lg:text-lg">
                {items.map((item, index) => (
                    <div className="sm:flex-row" key={index}>
                        <div
                            className={`flex flex-col items-center justify-center border-l gap-x-4 border-white py-3 sm:flex-row ${
                                index === items.length - 1 ? 'border-r' : ''
                            }`}
                        >
                            <>
                                <Image
                                    src={item.image}
                                    alt="Finest quality icon"
                                    width={30}
                                    height={40}
                                />

                                <p className="flex items-center font-extralight leading-7 text-center">
                                    {item.text}
                                </p>
                            </>
                        </div>
                    </div>
                ))}
            </dl>
        </section>
    )
}
