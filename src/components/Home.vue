<template>
    <div class="home" id="home">
        <h1>{{ msg }}</h1>
    </div>
</template>

<script>

    export default {
        name: 'home',
        data() {
            return {
                msg: 'This is the home section'
            }
        },
        methods: {
        }
    }

</script>

<style lang="scss" scoped>
    .home {
        h1 {
            color: blue;
        }
    }
</style>
