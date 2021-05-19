<template>
    <div>
        <secion class="updateForm">
            <AdminPostForm :post="loadedPost" />
        </secion>
    </div>
</template>

<script>
import AdminPostForm from '~/components/Admin/AdminPostForm.vue'
export default {
    components: { AdminPostForm },
    data() {
        return {
            loadedPost: {
                author: 'Author Test',
                title: 'Title Test',
                thumbnailLink: 'https://loremflickr.com/320/240?random=1',
                content: 'Content Test',
            },
        }
    },
}
</script>
