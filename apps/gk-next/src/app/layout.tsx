import '../styles/global.css'
import Header from './components/header/Header'

export const metadata = {
    title: 'Garrett Kitchens',
    description: 'This is the default description',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <Header />
                {children}
            </body>
        </html>
    )
}
