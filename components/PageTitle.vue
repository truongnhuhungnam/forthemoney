<template>
    <div class="main flex items-center justify-center">
        <h2
            class="text-center text-4xl text-pink-400 font-bold tracking-widest"
        >
            <span class="border-b-4 border-pink-400">{{ pageTitle }}</span>
        </h2>
    </div>
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
<style lang="scss" scoped>
.main {
    background-image: url(http://webmadewell.com/wp-content/uploads/2018/01/img-bg-sample-parallax-header.jpg);
    background-attachment: fixed;
    height: 333px;
}
</style>
