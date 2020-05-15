const mix = require('laravel-mix')
require('laravel-mix-purgecss')
require('mix-html-builder')
require('laravel-mix-imagemin')

const RESOURCE_ROOT = 'src'
const PUBLIC_PATH = 'build'

mix.setPublicPath(PUBLIC_PATH)
mix.setResourceRoot(RESOURCE_ROOT)

mix.js(`${RESOURCE_ROOT}/app.js`, PUBLIC_PATH)

mix.postCss(`${RESOURCE_ROOT}/app.css`, PUBLIC_PATH, [require('tailwindcss')('tailwind.config.js')])
    .purgeCss({
        defaultExtractor: (content) => content.match(/[\w-/.:_]+(?<!:)/g) || [],
        content: ['index.html', '**/*.js', '**/*.html', '**/*.vue'],
        css: [`${PUBLIC_PATH}/app.css`],
    })

mix.html({
    output: '.',
    minify: {
        removeComments: true,
        removeRedundantAttributes: false,
    },
})

mix.imagemin(
    'img/**.*',
    {
        context: RESOURCE_ROOT,
        force: true,
    },
    {
        optipng: {
            optimizationLevel: 5,
        },
        jpegtran: null,
    },
)

mix.browserSync({
    server: PUBLIC_PATH,
    watch: true,
    proxy: false,
})
