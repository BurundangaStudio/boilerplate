<template>
    <div class="about" id="about">
        <h1>{{ msg }}</h1>
    </div>
</template>

<script>
    export default {
        name: 'about',
        data() {
            return {
                msg: 'This is the about section'
            }
        },
        mounted() {
        },
        methods: {
            // enterTransition(el, done) {
            //     console.log('entro about')
            // },
            // leaveTransition(el, done) {
            //     console.log('salgo about')
            // }
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
