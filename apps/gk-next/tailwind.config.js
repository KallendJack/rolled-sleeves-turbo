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
                    primaryMid: '#03565C',
                    primaryDark: '#033D42',
                },
            },
        },
    },
}
