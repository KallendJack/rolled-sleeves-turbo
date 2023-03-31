const sharedConfig = require('tailwind-config/tailwind.config.js')

module.exports = {
    ...sharedConfig,
    theme: {
        ...sharedConfig.theme,
        extend: {
            ...sharedConfig.theme.extend,
            colors: {
                brand: {
                    // Accent colors
                    primary: '#038F99',

                    // Background colors
                    primaryBgLight: '#03565C',
                    primaryBgDark: '#033D42',

                    // For text colors we are using Tailwind UI default text colors
                },
            },
        },
    },
}
