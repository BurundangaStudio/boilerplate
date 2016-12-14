<template>
    <div id="app">
        <header-component></header-component>
        <transition name="transition" v-on:enter="enterTransition" v-on:leave="leaveTransition">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>

import HeaderComponent from './components/common/Header'

export default {
    name: 'app',
    methods: {
        enterTransition(el, done) {
            console.log(el)
            done()
        },
        leaveTransition(el, done) {
            console.log(el)
            done()
        }
    },
    components: {
        HeaderComponent
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
