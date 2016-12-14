//
// main.js

//
// AUTHOR
//
// Developed by Christian MacMillan in 2016
// https://github.com/cmacmillanmarin
// hello@christian-macmillan.com
//

import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App'
import Home from './components/Home'
import About from './components/About'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: App,
        children: [
            { path: '/', component: Home },
            { path: '/about', component: About }
        ]
    }
]

const router = new VueRouter({ routes })

/* eslint-disable no-new */
new Vue({ router }).$mount('#app')
