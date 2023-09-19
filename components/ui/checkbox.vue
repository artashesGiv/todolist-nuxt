<template>
    <label class="checkbox">
        <input
            :checked="modelValue"
            @input="$emit('update:modelValue', $event.target.checked)"
            type="checkbox"
        />
        <slot v-if="slots.default" />
    </label>
</template>

<script setup lang="ts">
export type CheckboxProps = {
    modelValue: boolean
}

defineProps<CheckboxProps>()
const slots = useSlots()
</script>

<style scoped lang="scss">
.checkbox {
    user-select: none;
}
</style>
