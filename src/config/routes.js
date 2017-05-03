//
// routes.js

import App from './../App'

const routes = [
    {
        path: '/',
        component: App,
        children: [
            { path: '/', redirect: '/home' },
            { path: '/home',
              component: (resolve) => {
                require(['./../components/Home.vue'], resolve)
            } },
            { path: '/about',
              component: (resolve) => {
                require(['./../components/About.vue'], resolve)
            } },
            { path: '/contact',
              component: (resolve) => {
                require(['./../components/Contact'], resolve)
            } }
        ]
    }
]

export default routes
