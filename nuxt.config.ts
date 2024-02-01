// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    alias: {
        "@": "/<rootDir>/assets"
    },
    css: ['~/assets/css/main.css'],
    modules: [
        '@vueuse/nuxt',
        'nuxt-icon',
    ],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    app: {
        head: {
            title: "Fan Blog"
        }
    }
})
