<template>
    <transition v-on:enter="enterTransition" v-on:leave="leaveTransition">
        <div class="about" id="about">
            <h1>{{ msg }}</h1>
        </div>
    </transition>
</template>

<script>

    import { TweenMax } from 'gsap'

    export default {
        name: 'about',
        data() {
            return {
                msg: 'This is the about section'
            }
        },
        mounted() {
            this.$nextTick(() => {
                TweenMax.to(this.$el, 1, { autoAlpha: 1, delay: 1 })
            })
        },
        methods: {
            enterTransition(el, done) {
                TweenMax.from(this.$el, 1, {
                    autoAplha: 0,
                    onComplete: () => {
                        done()
                    }
                })
            },
            leaveTransition(el, done) {
                TweenMax.to(this.$el, 1, {
                    autoAplha: 0,
                    onComplete: () => {
                        done()
                    }
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .about {
        display: block;
        h1 {
            color:red;
        }
    }
</style>
