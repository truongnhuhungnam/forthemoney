<template>
    <form class="w-1/3 mx-auto" @submit.prevent="onSave">
        <AppControlInput v-model="editedPost.author">
            Author Name
        </AppControlInput>
        <AppControlInput v-model="editedPost.title"> Title </AppControlInput>
        <AppControlInput v-model="editedPost.thumbnailLink">
            Thumbnail Link
        </AppControlInput>
        <AppControlInput v-model="editedPost.content" control-type="textarea">
            Content
        </AppControlInput>
        <div class="btnWrapper mt-4 text-center">
            <AppButton type="submit" btn-style="bg-green-400">Save</AppButton>
            <AppButton type="button" btn-style="bg-pink-400" @click="onCancel"
                >Cancel</AppButton
            >
        </div>
    </form>
</template>

<script>
import AppButton from '~/components/UI/AppButton.vue'
import AppControlInput from '~/components/UI/AppControlInput.vue'
export default {
    components: { AppControlInput, AppButton },
    props: {
        post: {
            type: Object,
            required: false,
            default() {
                return {
                    author: '',
                    title: '',
                    thumbnailLink: '',
                    content: '',
                }
            },
        },
    },
    data() {
        return {
            editedPost: this.post
                ? { ...this.post }
                : {
                      author: '',
                      title: '',
                      thumbnailLink: '',
                      content: '',
                  },
        }
    },
    methods: {
        onSave() {
            // save the post
            console.log(this.editedPost)
        },
        onCancel() {
            // navigate back
            this.$router.push('/admin')
        },
    },
}
</script>
