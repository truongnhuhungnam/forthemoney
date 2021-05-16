<template>
    <div class="bg-pink-400 py-4">
        <div class="container mx-auto text-xl text-white">
            <ul class="flex">
                <li><nuxt-link to="/">Home</nuxt-link></li>
                <li><nuxt-link to="/users">Users</nuxt-link></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {}
</script>
<style lang="scss" scoped>
ul {
    li {
        margin-right: 4em;
    }
}
</style>
