//
// index.js

import Vue from 'vue'
import VueResource from 'vue-resource'

import homeData from './jsons/home.json'
import aboutData from './jsons/about.json'
import contactData from './jsons/contact.json'

Vue.use(VueResource)
// Vue.http.options.emulateJSON = true (FOR LEGACY BROWSERS)

export default {

    getHome() {
        // Real: return Vue.http.get('GET_HOME_DATA_URL')
        // Simulation:
        return new Promise((resolve) => {
            setTimeout(() => { resolve(homeData) }, 2500)
        })
    },
    getAbout() {
        // Real: return Vue.http.get('GET_ABOUT_DATA_URL')
        // Simulation:
        return new Promise((resolve) => {
            setTimeout(() => { resolve(aboutData) }, 1000)
        })
    },
    getContact() {
        // Real: return Vue.http.get('GET_CONTACT_DATA_URL')
        // Simulation:
        return new Promise((resolve) => {
            setTimeout(() => { resolve(contactData) }, 5000)
        })
    }

}
