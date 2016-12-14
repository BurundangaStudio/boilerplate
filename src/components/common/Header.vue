//
// Header.vue

<template>
    <header>
        <ul>
            <li v-for="link in links">
                <router-link :to="link.path">{{ link.name }}</router-link>
                <li>
                    <p>
                        Pages Visited: {{ pagesVisited }}
                    </p>
                </li>
            </li>
        </ul>
    </header>
</template>

<script>

    import store from './../../data/vuex/store'

    export default {
        data() {
            return {
                links: [
                    { path: '/', name: 'Home' },
                    { path: '/about', name: 'About' }
                ]
            }
        },
        computed: {
            pagesVisited() {
                return store.state.count
            }
        }
    }
    
</script>

<style lang="scss" scoped>
    header {
        ul {
            margin: 0;
            padding: 0;
            li {
                list-style: none;
                display: inline-block;
                a, p {
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
