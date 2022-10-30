import colors from 'vuetify/es5/util/colors'

export default {
    // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
    ssr: false,

    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        titleTemplate: '%s - Asala Miracle',
        title: 'Mimx',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '@/assets/css/custom.css',
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        '@/plugins/module-injections.js',
        '@/plugins/helper.js',
        '@/plugins/form.js',
        '@/plugins/validator.js',
        '@/plugins/axios.js',
        '@/plugins/profile.js',
        '@/plugins/slack.js',
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    loadingIndicator: {
        name: 'rectangle-bounce',
        color: colors.amber.darken3,
        background: '#121212'
    },

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/vuetify
        '@nuxtjs/vuetify',
        '@nuxtjs/google-fonts',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/pwa',
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        baseURL: process.env.NUXT_ENV_BACKEND_URL,
        // credentials: true,
        progress: true,
        headers: {
            common: {
                'X-Requested-With': 'XMLHttpRequest',
                'Accept': 'application/json'
            }
        }
    },

    // PWA module configuration: https://go.nuxtjs.dev/pwa
    googleFonts: {
        // families: {
        //     Poppins: true
        // },
    },

    // PWA module configuration: https://go.nuxtjs.dev/pwa
    pwa: {
        // icon: {
        //     fileName: 'icon_round.png'
        // },
        meta: {
            name: 'Asala Miracle',
            author: 'Meyoron Aghogho <youngmayor.dev@gmail.com>',
            theme_color: '#121212'
        },
        manifest: {
            name: 'Asala Miracle',
            lang: 'en',
            // useWebmanifestExtension: false,
            short_name: 'Mimx',
            background_color: '#121212'
        }
    },

    // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
    vuetify: {
        customVariables: ['~/assets/variables.scss'],
        treeShake: true,
        theme: {
            dark: true,
            themes: {
                dark: {
                    primary: colors.blue.darken2,
                    accent: colors.grey.darken3,
                    secondary: colors.amber.darken3,
                    info: colors.teal.lighten1,
                    warning: colors.amber.base,
                    error: colors.deepOrange.accent4,
                    success: colors.green.accent3
                }
            }
        }
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        postcss: null,
    }
}
