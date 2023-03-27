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
                    white: '#FFFFFF',
                    grey: '#F3F3F3',
                },
            },
        },
    },
}
