<template>
    <div id="app">
        <header-component></header-component>
        <transition
            v-on:before-enter="beforeEnter"
            v-on:enter="enter"
            v-on:leave="leave"
            v-bind:css="false"
            mode="out-in"
            appear
        >
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>

import { TweenMax } from 'gsap'
import HeaderComponent from './components/common/Header'

export default {
    name: 'app',
    components: {
        HeaderComponent
    },
    methods: {
        beforeEnter(el) {
            TweenMax.set(el, { opacity: 0, y: 50 })
        },
        enter(el, done) {
            TweenMax.to(el, 0.5, { opacity: 1, y: 0, onComplete: () => { done() } })
        },
        leave(el, done) {
            TweenMax.to(el, 0.5, { opacity: 0, y: 50, onComplete: () => { done() } })
        }
    }
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
