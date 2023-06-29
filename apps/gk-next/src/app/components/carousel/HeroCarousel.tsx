'use client'

import { ButtonLink } from 'components/button/Button'
import ScrollTo from 'components/scroll/ScrollTo'
import { useEffect, useState } from 'react'
import { AnimatePresence, MotionConfig, motion } from 'framer-motion'
const heroImageVariants = {
    hidden: { x: -700, opacity: 0 },
    visible: { x: 0, opacity: 1 },
    exiting: { x: 700, opacity: 0 },
}

const images = [
    '/assets/home/hero/KitchenHero1.jpg',
    '/assets/home/hero/KitchenHero2.jpg',
    '/assets/home/hero/KitchenHero3.jpg',
]

export default function HeroCarousel() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            if (currentImageIndex === 2) {
                setCurrentImageIndex(0)
                return
            }
            setCurrentImageIndex((prevValue) => {
                if (prevValue === 2) {
                    return 0
                }
                return prevValue + 1
            })
        }, 4000)
        return () => clearInterval(interval)
    }, [])

    return (
        <section className="relative ">
            <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
                <MotionConfig transition={{ duration: 0.7, delay: 0.2 }}>
                    <AnimatePresence initial={false}>
                        <motion.img
                            alt="Hero"
                            className="absolute top-0 left-0 object-cover object-center w-full h-full"
                            key={images[currentImageIndex]}
                            style={{ y: 0 }}
                            initial="hidden"
                            animate="visible"
                            exit="exiting"
                            variants={heroImageVariants}
                            src={images[currentImageIndex]}
                        />
                    </AnimatePresence>
                </MotionConfig>
            </div>
            <div aria-hidden="true" className="absolute inset-0 bg-gray-900 opacity-50" />

            <div className="relative flex flex-col justify-end pb-24 xl:pb-32 items-center max-w-4xl px-6 h-screen -mt-14 md:-mt-[5rem] lg:-mt-[5rem] xl:-mt-20 mx-auto text-center lg:px-0">
                <h1 className="text-3xl tracking-tight text-white lg:text-4xl font-homeTitle">
                    We Design & Install Inspiring Kitchens
                </h1>

                <ButtonLink href="/book-a-free-survey" className="mt-4">
                    Start Your Journey <span aria-hidden="true">&rarr;</span>
                </ButtonLink>

                <ScrollTo elementId="scroll-to" />
            </div>
        </section>
    )
}
