//
//  Contact.vue

<template>
    <div class="contact" id="contact">
        <h1>{{ msg }}</h1>
    </div>
</template>

<script>

    import { TweenMax } from 'gsap'

    export default {
        name: 'Contact',
        data() {
            return {
                msg: 'Contact'
            }
        },
        methods: {
            enter(el, done) {
                TweenMax.to(el, 0.5, { opacity: 1, y: 0, rotation: -360, onComplete: done })
            },
            leave(el, done) {
                TweenMax.to(el, 0.5, { opacity: 0, y: 50, onComplete: done })
            }
        }
    }

</script>

<style lang="scss" scoped>
    .contact {
        opacity: 0;
        transform: translateY(50px);
        -webkit-transform: translateY(50px);
        -moz-transform: translateY(50px);
        h1 {
            color: green;
        }
    }
</style>
