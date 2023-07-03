import Script from 'next/script'
import { Montserrat, Raleway, Alegreya, Source_Serif_4 } from 'next/font/google'

import '../styles/global.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import ModalVideo from 'components/modal/ModalVideo'
import CookieBanner from 'components/cookie-banner/CookieBanner'

export const revalidate = 60

export const metadata = {
    title: 'Garrett Kitchens',
}

const montserrat = Montserrat({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-montserrat',
})

const sourceserif4 = Source_Serif_4({
    subsets: ['latin'],
    display: 'swap',
    weight: '400',
    variable: '--font-sourceserif4',
})

const raleway = Raleway({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-raleway',
})

const alegreya = Alegreya({
    subsets: ['latin'],
    weight: '400',
    display: 'swap',
    variable: '--font-alegreya',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html
            lang="en"
            className={`${montserrat.variable} ${raleway.variable} ${alegreya.variable} ${sourceserif4.variable}`}
        >
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-0H8S67J6VR"
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-0H8S67J6VR');`}
            </Script>
            <Script id="microsoft-analytics" strategy="afterInteractive">
                {`(function(w,d,t,r,u){var f,n,i;w[u]=w[u]||[],f=function(){var o={ti:"142002251", enableAutoSpaTracking: true};o.q=w[u],w[u]=new UET(o),w[u].push("pageLoad")},n=d.createElement(t),n.src=r,n.async=1,n.onload=n.onreadystatechange=function(){var s=this.readyState;s&&s!=="loaded"&&s!=="complete"||(f(),n.onload=n.onreadystatechange=null)},i=d.getElementsByTagName(t)[0],i.parentNode.insertBefore(n,i)})(window,document,"script","//bat.bing.com/bat.js","uetq");`}
            </Script>
            <Script id="tawk" strategy="afterInteractive">
                {`var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
                (function(){
                var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/5ccc88f32846b90c57acc14b/default';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
                })();`}
            </Script>
            <body id="body" className="mt-[67px] md:mt-[83px] lg:mt-[88px]">
                <Header />
                <main>{children}</main>
                <Footer />
                <ModalVideo />
                <CookieBanner />
            </body>
        </html>
    )
}
