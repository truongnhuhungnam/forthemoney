<template>
    <div>
        <div class="flex justify-center">
            <input
                v-model="deckId"
                type="text"
                placeholder="Please enter a deck id"
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
                Go to deck
            </button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            deckId: '',
        }
    },
    created() {
        this.$store.commit('pagetitle/SET_PAGETITLE', 'DECKS')
    },
    methods: {
        showDeck() {
            this.$router.push(`/decks/${this.deckId}`)
        },
    },
}
</script>
