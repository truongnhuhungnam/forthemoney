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
        <div class="flex justify-center">
            <PostPreview
                id="1"
                thumbnail="https://loremflickr.com/320/240?random=1"
                title="Hello"
                preview-text="This my furst post."
            />
            <PostPreview
                id="2"
                thumbnail="https://loremflickr.com/320/240?random=1"
                title="Hello"
                preview-text="This my furst post."
            />
            <PostPreview
                id="3"
                thumbnail="https://loremflickr.com/320/240?random=1"
                title="Hello"
                preview-text="This my furst post."
            />
        </div>
    </div>
</template>

<script>
import PostPreview from '~/components/posts/PostPreview.vue'
export default {
    components: { PostPreview },
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
