// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},
    runtimeConfig: {
        public:{
            endPointUrl: process.env.API_URL
        }
    },
    modules: [
        "~/modules/index.ts"
    ]
})
