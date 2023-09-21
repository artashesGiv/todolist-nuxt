// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    css: [
        '@/node_modules/reset-css/reset.css',
        '@/assets/styles/common.scss',
        'v-calendar/style.css',
    ],
    build: {
        transpile: ['v-calendar@next'],
    },
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
    plugins: [{ src: '~/plugins/clickOutside.ts', ssr: false }],
    modules: ['@pinia/nuxt'],
    pinia: {
        autoImports: ['defineStore'],
    },
})
