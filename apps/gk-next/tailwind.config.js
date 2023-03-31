const sharedConfig = require('tailwind-config/tailwind.config.js')

module.exports = {
    ...sharedConfig,
    theme: {
        ...sharedConfig.theme,
        extend: {
            ...sharedConfig.theme.extend,
            colors: {
                brand: {
                    primary: '#038F99',
                    secondary: '#35414C',
                    white: '#FFFFFF',
                    grey: '#F3F3F3',
                    footer: '#03565c',
                    darkGreen: '#033d42',
                },
            },
        },
    },
}
