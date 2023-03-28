const Hero = () => {
    return (
        <section className="relative bg-gray-900">
            {/* Decorative image and overlay */}
            <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
                <img
                    src="https://garrettkitchens.co.uk/wp-content/uploads/2021/12/Clarendon-Hartforth-Blue-Kitchen.webp"
                    alt=""
                    className="object-cover object-center w-full h-full"
                />
            </div>
            <div aria-hidden="true" className="absolute inset-0 bg-gray-900 opacity-50" />

            <div className="relative flex flex-col items-center max-w-3xl px-6 py-32 mx-auto text-center sm:py-64 lg:px-0">
                <h1 className="text-4xl font-bold tracking-tight text-white lg:text-6xl">
                    New arrivals are here
                </h1>
                <p className="mt-4 text-xl text-white">
                    The new arrivals have, well, newly arrived. Check out the latest options from
                    our summer small-batch release while they&apos;re still in stock.
                </p>
                <a
                    href="#"
                    className="inline-block px-8 py-3 mt-8 text-base font-medium text-gray-900 bg-white border border-transparent rounded-md hover:bg-gray-100"
                >
                    Shop New Arrivals
                </a>
            </div>
        </section>
    )
}

export default Hero
