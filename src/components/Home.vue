<template>
    <div class="home" id="home">
        <h1>{{ msg }}</h1>
    </div>
</template>

<script>

    export default {
        name: 'home',
        props: {
            enter: Boolean
        },
        data() {
            return {
                msg: 'This is the home section'
            }
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
