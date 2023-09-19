// https://nuxt.com/docs/api/configuration/nuxt-config
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

    app: {
        head: {
            title: 'Todolist',
            meta: [{ name: 'description', content: 'Todoapp' }],
        },
        pageTransition: {
            name: 'fade',
            mode: 'out-in',
        },
    },

    modules: ['@pinia/nuxt'],
})
