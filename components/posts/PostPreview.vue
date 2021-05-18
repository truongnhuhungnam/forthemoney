<template>
    <div class="max-w-sm rounded overflow-hidden shadow-lg m-4">
        <nuxt-link
            :to="'/posts/' + id"
            class="block transition duration-500 ease-in-out hover:opacity-60"
        >
            <img class="w-full" :src="thumbnail" />
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">{{ title }}</div>
                <p class="text-gray-700 text-base">{{ previewText }}</p>
            </div>
        </nuxt-link>
    </div>
</template>

<script>
export default {
    props: {
        id: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        previewText: {
            type: String,
            required: true,
        },
        thumbnail: {
            type: String,
            required: true,
        },
    },
}
</script>
