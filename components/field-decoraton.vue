<template>
    <div class="field-decoration">
        <div v-if="label" class="field-decoration__label">
            {{ label }}
        </div>
        <div class="field-decoration__slot" v-bind="$attrs">
            <slot />
            <ui-icon-base
                v-if="icon"
                class="field-decoration__icon"
                :name="icon"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
export type FieldDecorationProps = {
    label?: string
    icon?: Icons
}

defineProps<FieldDecorationProps>()
defineOptions({
    inheritAttrs: false,
})
</script>

<style scoped lang="scss">
.field-decoration {
    &__slot {
        display: flex;
        align-items: center;
        padding: 0 toRem(20);
        border: 3px solid $brand;
        border-radius: toRem(6);
        box-sizing: border-box;
        background-color: $base;
        color: $brand;
    }

    &__label {
        font-size: toRem(18);
        line-height: toRem(21);
        font-weight: 400;
        color: $brand;
        margin-bottom: toRem(8);
    }

    &__icon {
        font-size: toRem(20);
    }
}
</style>
