import '../styles/global.css'

import Header from './components/header/Header'

export const metadata = {
    title: 'Garrett Kitchens',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <Header />
                <main>{children}</main>
            </body>
        </html>
    )
}
