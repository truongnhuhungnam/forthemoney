<template>
    <div class="formField py-1 flex items-center">
        <label class="w-1/3"><slot /></label>
        <input
            v-if="controlType === 'input'"
            class="border rounded-sm px-2 py-1 w-2/3"
            v-bind="$attrs"
            :value="value"
            @input="$emit('input', $event.target.value)"
        />
        <textarea
            v-if="controlType === 'textarea'"
            class="border rounded-sm px-2 py-1 w-2/3"
            v-bind="$attrs"
            :value="value"
            @input="$emit('input', $event.target.value)"
        ></textarea>
    </div>
</template>

<script>
export default {
    name: 'AppControllInput',
    props: {
        controlType: {
            type: String,
            default: 'input',
        },
        value: {
            type: String,
            default: '',
        },
    },
}
</script>
