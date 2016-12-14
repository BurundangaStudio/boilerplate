//
// App.vue

<template>
    <div id="app">
        <header-component></header-component>
        <transition @enter="enter" @leave="leave" :css="false" mode="out-in" appear>
            <router-view ref="page"></router-view>
        </transition>
    </div>
</template>

<script>

import { TweenMax } from 'gsap'

import store from './data/vuex/store'
import HeaderComponent from './components/common/Header'

export default {
    name: 'app',
    store,
    methods: {
        enter(el, done) {
            store.commit('increment')
            if (this.$refs.page.enter) this.$refs.page.enter(el, done)
            else TweenMax.to(el, 0.5, { opacity: 1, y: 0, onComplete: done })
        },
        leave(el, done) {
            if (this.$refs.page.leave) this.$refs.page.leave(el, done)
            else TweenMax.to(el, 0.5, { opacity: 0, y: 50, onComplete: done })
        }
    },
    components: {
        HeaderComponent
    },
}

</script>

<style lang="scss" scoped>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    margin-top: 60px;
}
</style>
