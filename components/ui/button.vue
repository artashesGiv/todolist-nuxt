<template>
    <button :class="classes">
        <ui-icon-base v-if="icon" :name="icon" class="button__icon" />
        <span v-if="slots.default" class="button__slot">
            <slot />
        </span>
    </button>
</template>

<script setup lang="ts">
import { IconBaseProps } from '~/components/ui/icon-base.vue'

export type ButtonProps = {
    icon?: Icons
    view?: 'base' | 'brand' | 'flat'
    size?: 'm' | 'l'
    isOnlyIcon?: boolean
}

const { view, size, isOnlyIcon } = withDefaults(defineProps<ButtonProps>(), {
    size: 'm',
    view: 'base',
})

const slots = useSlots()
const classes = computed(() => {
    const classes = [`button button_view-${view} button_size-${size}`]

    if (isOnlyIcon) {
        classes.push('is-only-icon')
    }

    return classes
})
</script>

<style scoped lang="scss">
.button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 0 toRem(30);
    border-radius: toRem(6);
    font-weight: 500;

    &__icon {
        font-size: toRem(20);
        margin-right: toRem(8);
    }

    &__slot {
        white-space: nowrap;
    }

    &_view {
        &-base {
            color: $base;

            &:hover {
                color: $baseHover;
            }
        }

        &-brand {
            background-color: $brand;
            color: $base;

            &:hover {
                background-color: $brandHover;
            }
        }

        &-flat {
            border: 3px solid $brand;
            color: $brand;

            &:hover {
                border-color: $brandHover;
                color: $brandHover;
            }
        }
    }

    &_size {
        &-m {
            height: toRem(40);
            font-size: toRem(16);
            line-height: toRem(21);
        }

        &-l {
            font-size: toRem(21);
            line-height: toRem(24);
        }
    }

    &.is-only-icon {
        padding: 0;
        height: toRem(20);
        width: toRem(20);

        .button__icon {
            margin-right: 0;
        }
    }

    transition: all 0.3s ease;
}
</style>
