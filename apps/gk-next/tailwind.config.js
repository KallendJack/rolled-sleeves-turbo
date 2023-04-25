const sharedConfig = require('tailwind-config/tailwind.config.js')

module.exports = {
    ...sharedConfig,
    theme: {
        ...sharedConfig.theme,
        extend: {
            ...sharedConfig.theme.extend,
            fontFamily: {
                heading: ['var(--font-montserrat)'],
                body: ['var(--font-raleway)'],
            },
            colors: {
                brand: {
                    // Accent colors
                    primary: '#7DA19A',

                    // Background colors
                    primaryBg: '#262525',
                    greyBg: '#F2F2F2',

                    // Text colors
                    headingText: '#B2A79D',
                    bodyTextLight: '...',
                    bodyTextDark: '...',
                },
            },
        },
    },
}
