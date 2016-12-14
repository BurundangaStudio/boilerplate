//
//  About.vue

<template>
    <div class="about" id="about">
        <h1>{{ msg }}</h1>
        <transition name="fade">
            <p v-if="dataDownloaded">{{ content }}</p>
        </transition>
        <p v-if="!dataDownloaded">Loading data with Vue Resource</p>
    </div>
</template>

<script>

    import api from './../data/api/index'

    export default {
        name: 'about',
        data() {
            return {
                msg: 'About',
                dataDownloaded: false
            }
        },
        created() {
            this.fetchData()
        },
        methods: {
            fetchData() {
                api.getAbout().then((data) => {
                    this.content = data.content
                    this.dataDownloaded = true
                }, (err) => { console.warn(err.body) })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .about {
        opacity: 0;
        transform: translateY(50px);
        -webkit-transform: translateY(50px);
        -moz-transform: translateY(50px);
        h1 {
            color:red;
        }
    }
</style>
