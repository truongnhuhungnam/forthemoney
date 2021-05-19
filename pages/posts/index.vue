<template>
    <div>
        <div class="flex justify-center">
            <input
                v-model="deckId"
                type="text"
                placeholder="Please enter a post id"
                class="border border-gray-600 rounded-sm p-2 mr-1"
            />
            <button
                class="
                    rounded-sm
                    px-1
                    text-white
                    bg-pink-400
                    p-2
                    transition
                    hover:opacity-50
                "
                @click="showDeck"
            >
                Go to post
            </button>
        </div>
        <PostList />
    </div>
</template>

<script>
import PostList from '~/components/posts/PostList.vue'
export default {
    components: { PostList },
    data() {
        return {
            deckId: '',
        }
    },
    created() {
        this.$store.commit('pagetitle/SET_PAGETITLE', 'POSTS')
    },
    methods: {
        showDeck() {
            this.$router.push(`/posts/${this.deckId}`)
        },
    },
}
</script>
