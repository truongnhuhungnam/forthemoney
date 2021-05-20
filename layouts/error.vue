<template>
    <div>
        <h1 class="text-center text-4xl text-pink-400">Oops!</h1>
        <p class="text-center">
            Back <a href="/" class="text-blue-400">Safety</a>!
        </p>
    </div>
</template>

<script>
export default {
    created() {
        this.$store.commit('pagetitle/SET_PAGETITLE', '404')
    },
}
</script>
