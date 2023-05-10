const sharedConfig = require('tailwind-config/tailwind.config.js')
const polished = require('polished')

const primary = '#7DA19A'
const secondary = '#B2A79D'

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
                    primary: primary,
                    secondary: secondary,

                    // Hover colors
                    primaryHover: polished.lighten(0.05, primary),
                    secondaryHover: polished.lighten(0.05, secondary),

                    // Focus colors
                    primaryFocus: polished.darken(0.05, primary),
                    secondaryFocus: polished.darken(0.05, secondary),

                    // Background colors
                    primaryBg: '#262525',
                    greyBg: '#F2F2F2',
                },
            },
            spacing: {
                sm: '2.5rem',
                lg: '4rem',
            },
        },
    },
}
