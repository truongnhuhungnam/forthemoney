<template>
    <div>
        <section class="newPostForm">
            <AdminPostForm />
        </section>
    </div>
</template>

<script>
import AdminPostForm from '~/components/Admin/AdminPostForm.vue'
export default {
    components: { AdminPostForm },
    layout: 'admin',
}
</script>
