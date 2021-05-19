<template>
    <div class="flex justify-center">
        <PostPreview
            id="1"
            thumbnail="https://loremflickr.com/320/240?random=1"
            title="Hello"
            text="This my furst post."
        />
        <PostPreview
            id="2"
            thumbnail="https://loremflickr.com/320/240?random=1"
            title="Hello"
            text="This my furst post."
        />
        <PostPreview
            id="3"
            thumbnail="https://loremflickr.com/320/240?random=1"
            title="Hello"
            text="This my furst post."
        />
    </div>
</template>

<script>
import PostPreview from './PostPreview.vue'
export default {
    components: { PostPreview },
}
</script>
