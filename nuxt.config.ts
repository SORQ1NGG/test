// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    typescript: {
        strict: true,
    },
    // @ts-ignore
    css: ['~/assets/css/index.scss'],
    modules: [
        '@nuxtjs/eslint-module'
    ]
})
