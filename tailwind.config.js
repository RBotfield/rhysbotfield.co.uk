// See default config https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
            },
        },
        screens: {
            xs: '375px',
            ...defaultTheme.screens,
        },
    },
    plugins: [
        require('@tailwindcss/ui'),
    ],
    purge: {
        enabled: process.env.NODE_ENV === 'production',
        defaultExtractor: (content) => content.match(/[\w-/.:_]+(?<!:)/g) || [],
        content: [
            '**/*.html',
        ],
    },
}
