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
        <div class="flex justify-center">
            <div class="max-w-sm rounded overflow-hidden shadow-lg m-4">
                <nuxt-link
                    to="/posts/1"
                    class="
                        block
                        transition
                        duration-500
                        ease-in-out
                        hover:opacity-60
                    "
                >
                    <img
                        class="w-full"
                        src="https://loremflickr.com/320/240?random=1"
                    />
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">Mountain</div>
                        <p class="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Voluptatibus quia, nulla! Maiores et
                            perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                </nuxt-link>
            </div>
            <div class="max-w-sm rounded overflow-hidden shadow-lg m-4">
                <nuxt-link
                    to="/posts/1"
                    class="
                        block
                        transition
                        duration-500
                        ease-in-out
                        hover:opacity-60
                    "
                >
                    <img
                        class="w-full"
                        src="https://loremflickr.com/320/240?random=1"
                    />
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">Mountain</div>
                        <p class="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Voluptatibus quia, nulla! Maiores et
                            perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                </nuxt-link>
            </div>
            <div class="max-w-sm rounded overflow-hidden shadow-lg m-4">
                <nuxt-link
                    to="/posts/1"
                    class="
                        block
                        transition
                        duration-500
                        ease-in-out
                        hover:opacity-60
                    "
                >
                    <img
                        class="w-full"
                        src="https://loremflickr.com/320/240?random=1"
                    />
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">Mountain</div>
                        <p class="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Voluptatibus quia, nulla! Maiores et
                            perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                </nuxt-link>
            </div>
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
        this.$store.commit('pagetitle/SET_PAGETITLE', 'POSTS')
    },
    methods: {
        showDeck() {
            this.$router.push(`/posts/${this.deckId}`)
        },
    },
}
</script>
