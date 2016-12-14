//
// routes.js

import App from './../App'
import Home from './../components/Home'
import About from './../components/About'
import Contact from './../components/Contact'

const routes = [
    {
        path: '/',
        component: App,
        children: [
            { path: '/', component: Home },
            { path: '/about', component: About },
            { path: '/contact', component: Contact }
        ]
    }
]

export default routes
