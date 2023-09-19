<template>
    <button
        class="burger-button"
        :class="{ 'burger-button_active': modelValue }"
        @click.prevent="$emit('update:modelValue', !modelValue)"
    >
        <span class="burger-button__elem burger-button__elem_1" />
        <span class="burger-button__elem burger-button__elem_2" />
        <span class="burger-button__elem burger-button__elem_3" />
    </button>
</template>

<script setup lang="ts">
export type BurgerButtonProps = {
    modelValue: boolean
}

defineProps<BurgerButtonProps>()
</script>

<style scoped lang="scss">
.burger-button {
    display: flex;
    width: toRem(30);
    height: toRem(25);
    flex-direction: column;
    justify-content: space-between;

    &__elem {
        transition:
            background-color,
            transform 0.3s ease;
        display: block;
        background-color: $brand;
        width: 100%;
        height: toRem(3);
    }

    &:hover {
        .burger-button {
            &__elem {
                background-color: $brandHover;
            }
        }
    }

    &_active {
        .burger-button {
            &__elem {
                &_1 {
                    transform: rotateZ(45deg) scaleX(0.75) translate(10px, -2px);
                }
                &_3 {
                    transform: rotateZ(-45deg) scaleX(0.75) translate(10px, 2px);
                }
            }
        }
    }
}
</style>
