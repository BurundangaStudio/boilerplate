//
//  Home.vue

<template>
    <div class="home" id="home">
        <h1>{{ msg }}</h1>
    </div>
</template>

<script>

    import { TweenMax } from 'gsap'

    export default {
        name: 'home',
        data() {
            return {
                msg: 'Home'
            }
        },
        methods: {
            enter(el, done) {
                TweenMax.to(el, 0.5, { opacity: 1, y: 0, rotation: 360, onComplete: done })
            },
            leave(el, done) {
                TweenMax.to(el, 0.5, { opacity: 0, y: 50, onComplete: done })
            }
        }
    }

</script>

<style lang="scss" scoped>
    .home {
        opacity: 0;
        transform: translateY(50px);
        -webkit-transform: translateY(50px);
        -moz-transform: translateY(50px);
        h1 {
            color: blue;
        }
    }
</style>
