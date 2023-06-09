module.exports = {
    content: [
        // app content
        `src/**/*.{js,ts,jsx,tsx}`,
        // include packages if not transpiling
        // "../../packages/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        container: {
            center: true,
        },
    },
    plugins: [require('@tailwindcss/aspect-ratio'), require('@tailwindcss/forms')],
}
