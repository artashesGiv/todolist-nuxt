<template>
    <button :class="classes" @click.prevent="$emit('click')">
        <ui-icon-base :name="icon" :size="size" class="button__icon" />
    </button>
</template>

<script setup lang="ts">
import { IconBaseProps } from '~/components/ui/icon-base.vue'

export type ButtonProps = {
    icon: Icons
    view?: 'base' | 'brand'
    size?: IconBaseProps['size']
}

const { view } = withDefaults(defineProps<ButtonProps>(), {
    size: 'm',
    view: 'base',
})

const classes = computed(() => `button button_view-${view}`)
</script>

<style scoped lang="scss">
.button {
    &_view {
        &-base {
            color: $base;

            &:hover {
                color: $baseHover;
            }
        }

        &-brand {
            color: $brand;

            &:hover {
                color: lighten($brand, 8%);
            }
        }
    }
}
</style>
