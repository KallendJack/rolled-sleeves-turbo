import { Montserrat, Raleway } from 'next/font/google'

import '../styles/global.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import ModalVideo from 'components/modal/ModalVideo'

export const revalidate = 60

export const metadata = {
    title: 'Garrett Kitchens',
}

const montserrat = Montserrat({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-montserrat',
})

const raleway = Raleway({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-raleway',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={`${montserrat.variable} ${raleway.variable}`}>
            <body id="body">
                <Header />
                <main>{children}</main>
                <Footer />
                <ModalVideo />
            </body>
        </html>
    )
}
