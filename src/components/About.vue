//
//  About.vue

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
                msg: 'About'
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
