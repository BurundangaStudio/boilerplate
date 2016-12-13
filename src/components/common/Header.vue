<template>
    <header>
        <ul>
            <li v-for="link in links">
                <router-link :to="link.path">{{ link.name }}</router-link>
            </li>
        </ul>
    </header>
</template>

<script>
    export default {
        data() {
            return {
                links: [
                    { path: '/home', name: 'Home' },
                    { path: '/about', name: 'About' }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    header {
        ul {
            li {
                list-style: none;
                display: inline-block;
                a {
                    color: black;
                    padding: 0px 10px;
                    text-decoration: none;
                    &:hover {
                        color: black;
                    }
                }
            }
        }
    }
</style>
