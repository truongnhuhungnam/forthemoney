<template>
    <button
        class="text-white rounded-sm py-2 px-4 transition hover:opacity-50 mx-2"
        :class="btnStyle"
        v-bind="$attrs"
        v-on="$listeners"
    >
        <slot />
    </button>
</template>

<script>
export default {
    name: 'AppButton',
    props: {
        btnStyle: {
            type: String,
            default: '',
        },
    },
}
</script>
