//
// Header.vue

<template>
    <header>
        <ul>
            <li>
                <p>
                    Pages Visited: {{ pagesVisited }} - <span @click="resetCounter">Reset</span>
                </p>
            </li>
            <br />
            <li v-for="link in links">
                <router-link :to="link.path">{{ link.name }}</router-link>
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
                    { path: '/about', name: 'About' },
                    { path: '/contact', name: 'Contact' }
                ]
            }
        },
        computed: {
            pagesVisited() {
                return store.state.count
            }
        },
        methods: {
            resetCounter() { store.commit('reset') }
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
                p {
                    font-size: 12px;
                    color: gray;
                    &:hover { color: gray; }
                    span {
                        cursor: pointer;
                        color: black;
                    }
                }
            }
        }
    }
</style>
