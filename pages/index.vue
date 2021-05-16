<template>
    <div></div>
</template>

<script>
export default {
    created() {
        this.$store.commit('SET_PAGETITLE', 'Home')
    },
}
</script>
