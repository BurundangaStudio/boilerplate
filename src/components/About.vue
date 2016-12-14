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
        h1 {
            color:red;
        }
    }
</style>
