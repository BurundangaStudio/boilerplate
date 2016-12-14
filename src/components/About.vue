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
        }
    }
</script>

<style lang="scss" scoped>
    .about {
        opacity: 0;
        transform: translateY(150px);
        -webkit-transform: translateY(150px);
        -moz-transform: translateY(150px);
        h1 {
            color:red;
        }
    }
</style>
