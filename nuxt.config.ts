// https://nuxt.com/docs/api/configuration/nuxt-config
// import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
    devtools: { enabled: true },
    css: ['@/node_modules/reset-css/reset.css', '@/assets/styles/common.scss'],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData:
                        '@import "@/assets/styles/utils/vars.scss";',
                },
            },
        },
    },
})
