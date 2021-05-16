<template>
    <div></div>
</template>

<script>
export default {
    created() {
        this.$store.commit('pagetitle/SET_PAGETITLE', 'HOME')
    },
}
</script>
