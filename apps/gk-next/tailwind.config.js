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

                    // For text colors we are using Tailwind UI default text colors
                },
            },
        },
    },
}
