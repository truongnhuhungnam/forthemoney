<template>
    <div>
        <app-header />
        <div class="container mx-auto py-4">
            <PageTitle />
            <Nuxt />
        </div>
    </div>
</template>

<script>
import AppHeader from '~/components/AppHeader.vue'
import PageTitle from '~/components/PageTitle.vue'
export default {
    components: { AppHeader, PageTitle },
}
</script>
