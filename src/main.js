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

import routes from './config/routes'

Vue.use(VueRouter)

const router = new VueRouter({ routes })

/* eslint-disable no-new */
new Vue({ router }).$mount('#app')
