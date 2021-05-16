<template>
    <h2 class="text-center text-3xl text-pink-400">
        <span class="border-b-2 border-pink-400">{{ pageTitle }}</span>
    </h2>
</template>

<script>
export default {
    computed: {
        pageTitle() {
            return this.$store.state.pagetitle.pageTitle
        },
    },
}
</script>
