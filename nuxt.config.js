require('dotenv').config();
const { DATABASE_PASSWORD } = process.env;

export default {
    /*
     ** Nuxt rendering mode
     ** See https://nuxtjs.org/api/configuration-mode
     */
    mode: 'universal',

    /*
     ** Nuxt target
     ** See https://nuxtjs.org/api/configuration-target
     */
    target: 'server',

    /*
     ** Headers of the page
     ** See https://nuxtjs.org/api/configuration-head
     */
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            {
                hid: 'description',
                name: 'description',
                content: process.env.npm_package_description || '',
            },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },

    /*
     ** Global CSS
     */
    css: [],

    /*
     ** Plugins to load before mounting the App
     ** https://nuxtjs.org/guide/plugins
     */
    plugins: [],

    /*
     ** Auto import components
     ** See https://nuxtjs.org/api/configuration-components
     */
    components: true,

    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [],

    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://http.nuxtjs.org
        '@nuxt/http',
        '@nuxtjs/axios',
        '@nuxtjs/auth-next',
    ],
    // axios: {
    //     baseURL: 'http:localhost:3000',
    // },
    auth: {
        redirect: {
            login: '/login', //未ログイン時にアクセスした場合リダイレクトされるURL
            logout: '/login', //ログアウト時のリダイレクトURL
            callback: '/login', //OAuthなどIDプロバイダーでログインした場合リダイレクトされるURL
            home: '/', //ログイン後リダイレクトされるURL
        },
        strategies: {
            local: {
                token: {
                    property: 'token', //auth.tokenをresponse.jsonとする
                    // required: true, //token処理を有効
                    // name: Authorization, //axiosで使われる認証ヘッダー名
                    // type: 'Bearer', //axiosで使われる承認認証ヘッダータイプ
                    // maxAge: 1800, //tokenの有効期限を秒数で設定（30分）
                },
                user: {
                    property: 'user', //auth.userをresponse.jsonとする
                    // autoFetch: true, //ログイン後のfetchを有効
                    // clientId: false, //バックエンドでクライアントIDが必要なとき
                    // grantType: false, //バックエンドで付与したいタイプがあるとき
                    // scope: false, //バックエンドでスコープが必要なとき
                },
                endpoints: {
                    login: { url: '/api/auth/login', method: 'post', propertyName: 'token' }, //ログイン
                    user: { url: '/api/auth/user', method: 'get', propertyName: false }, //ログイン後にtoken
                    logout: { url: '/api/auth/logout', method: 'post' }, //ログアウト
                },
            },
        },
    },
    router: {
        middleware: ['auth'],
    },
    /*
     ** Server Middleware
     */
    serverMiddleware: {
        '/api': '~/api',
    },

    /*
     ** Build configuration
     ** See https://nuxtjs.org/api/configuration-build/
     */
    build: {},
    env: {
        DATABASE_PASSWORD,
    },
};
