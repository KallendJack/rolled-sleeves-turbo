module.exports = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.ctfassets.net',
            },
            {
                protocol: 'https',
                hostname: 'assets.ctfassets.net',
            },
            {
                protocol: 'https',
                hostname: 'downloads.ctfassets.net',
            },
            {
                protocol: 'https',
                hostname: 'img.youtube.com',
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
            {
                protocol: 'https',
                hostname: 'tailwindui.com',
            },
        ],
    },
    async redirects() {
        return [
            {
                source: '/how-to-choose-the-right-handleless-kitchen',
                destination: '/blog/how-to-choose-the-right-handleless-kitchen',
                permanent: true,
            },
            {
                source: '/new-product-spotlight-fluted-glazed-doors',
                destination: '/blog/new-product-spotlight-fluted-glazed-doors',
                permanent: true,
            },
            {
                source: '/fitted-kitchens-guide-top-3-tips',
                destination: '/blog/fitted-kitchens-guide-top-3-tips',
                permanent: true,
            },
            { source: '/our-projects', destination: '/our-work', permanent: true },
        ]
    },
}
