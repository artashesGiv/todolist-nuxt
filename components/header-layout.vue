<template>
    <header class="header">
        <ui-burger-button v-model="modelValue" />
        <!-- search-->
        <!-- actions-->
    </header>
</template>

<script setup lang="ts">
export type HeaderLayoutProps = {
    modelValue: boolean
}

const props = defineProps<HeaderLayoutProps>()
const emit = defineEmits(['update:modelValue'])

const modelValue = computed({
    get: () => props.modelValue,
    set: value => emit('update:modelValue', value),
})
</script>

<style scoped lang="scss">
.header {
    background-color: $accent;
    height: $header-height;
    display: flex;
    align-items: center;
    padding: 0 toRem(32);
}
</style>
