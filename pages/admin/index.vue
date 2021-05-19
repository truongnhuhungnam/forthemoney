<template>
    <div>
        <section class="newPost text-center py-4">
            <AppButton
                btn-style="bg-pink-400"
                @click="$router.push('/admin/new-post')"
                >Create Post</AppButton
            >
        </section>
        <section class="existingPost">
            <h1 class="text-center mb-4">
                <span
                    class="
                        text-center
                        border-b-2 border-pink-400
                        text-4xl text-pink-400
                        py-4
                        inline-block
                    "
                    >Existing Post</span
                >
            </h1>
            <PostList is-admin />
        </section>
    </div>
</template>

<script>
import PostList from '~/components/posts/PostList.vue'
import AppButton from '~/components/UI/AppButton.vue'
export default {
    components: { PostList, AppButton },
}
</script>
