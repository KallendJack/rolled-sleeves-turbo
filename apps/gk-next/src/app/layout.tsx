import { Montserrat, Raleway } from 'next/font/google'

import '../styles/global.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'

const montserrat = Montserrat({
    variable: '--font-montserrat',
    subsets: ['latin'],
    display: 'swap',
})

const raleway = Raleway({
    variable: '--font-raleway',
    subsets: ['latin'],
    display: 'swap',
})

export const metadata = {
    title: 'Garrett Kitchens',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={`${montserrat.variable} ${raleway.variable}`}>
            <body>
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    )
}
