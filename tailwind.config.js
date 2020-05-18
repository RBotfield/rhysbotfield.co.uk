// See default config https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'cool-gray': {
                    100: '#f7fafc',
                    200: '#edf2f7',
                    300: '#e2e8f0',
                    400: '#cbd5e0',
                    500: '#a0aec0',
                    600: '#718096',
                    700: '#4a5568',
                    800: '#2d3748',
                    900: '#1a202c',
                },
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
