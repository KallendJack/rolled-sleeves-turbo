import '../styles/global.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'

export const metadata = {
    title: {
        default: 'Garrett Kitchens',
        template: '%s | Garrett Kitchens',
    },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    )
}
