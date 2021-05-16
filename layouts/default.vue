<template>
    <div>
        <app-header />
        <div class="container mx-auto"><Nuxt /></div>
    </div>
</template>

<script>
import AppHeader from '~/components/AppHeader.vue'
export default {
    components: { AppHeader },
}
</script>
