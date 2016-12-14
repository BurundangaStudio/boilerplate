//
//  Home.vue

<template>
    <div class="home" id="home">
        <h1>{{ msg }}</h1>
        <transition name="fade">
            <p v-if="dataDownloaded">{{ content }}</p>
        </transition>
        <p v-if="!dataDownloaded">Loading data with Vue Resource</p>
    </div>
</template>

<script>

    import { TweenMax } from 'gsap'

    import api from './../data/api/index'

    export default {
        name: 'home',
        data() {
            return {
                msg: 'Home',
                dataDownloaded: false
            }
        },
        created() {
            this.fetchData()
        },
        watch: {
            $route: 'fetchData'
        },
        methods: {
            fetchData() {
                if (this.dataDownloaded) return
                api.getHome().then((data) => {
                    this.content = data.content
                    this.dataDownloaded = true
                }, (err) => { console.warn(err.body) })
            },
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
            margin: 20px 0px 10px 0px;
        }
    }
</style>
