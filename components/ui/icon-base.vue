<template>
    <i :class="classes" />
</template>

<script setup lang="ts">
export type IconBaseProps = {
    name: Icons
    size?: 's' | 'm' | 'l'
}

const { name, size } = withDefaults(defineProps<IconBaseProps>(), {
    size: 's',
})

const classes = computed(
    () => `icon-base icon-base_${name} icon-base_size-${size}`,
)
</script>

<style scoped lang="scss">
.icon-base {
    display: inline-block;
    font-weight: 400;

    &_size {
        &-s {
            font-size: toRem(16);
        }
        &-m {
            font-size: toRem(20);
        }
        &-l {
            font-size: toRem(35);
        }
    }

    &::before {
        font-family: $icon;
        display: block;
        font-size: inherit;
        color: inherit;
        line-height: 1;
    }

    @include iconsModify;

    transition: 0.3s ease;
    transition-property: opacity, color, transform;
}
</style>
