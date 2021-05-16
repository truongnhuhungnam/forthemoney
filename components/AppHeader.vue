<template>
    <div class="bg-pink-400">
        <div class="container mx-auto text-xl text-white">
            <ul class="flex">
                <li><nuxt-link to="/">Home</nuxt-link></li>
                <li><nuxt-link to="/decks">Decks</nuxt-link></li>
                <li><nuxt-link to="/users">Users</nuxt-link></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {}
</script>
<style lang="scss" scoped>
.nuxt-link-active:hover,
.nuxt-link-exact-active {
    background-color: rgba(219, 39, 119, var(--tw-bg-opacity));
}
ul {
    li {
        a {
            display: block;
            padding: 1rem;
        }
    }
}
</style>
