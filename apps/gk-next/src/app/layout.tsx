import '../styles/global.css'

export const metadata = {
    title: 'Garrett Kitchens',
    description: 'This is the default description',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}
