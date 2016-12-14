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
                msg: 'This is the home section'
            }
        },
        methods: {
            beforeEnter(el) {
                TweenMax.set(el, { opacity: 0, y: 150 })
            },
            enter(el, done) {
                TweenMax.to(el, 2, { opacity: 1, y: 0, onComplete: done })
            },
            leave(el, done) {
                TweenMax.to(el, 2, { opacity: 0, y: 50, onComplete: done })
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
