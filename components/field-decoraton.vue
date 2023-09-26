<template>
    <div
        class="field-decoration"
        :class="{ 'field-decoration_is-error': isError }"
    >
        <div v-if="label" class="field-decoration__label">
            {{ label }}
        </div>
        <div v-bind="$attrs" class="field-decoration__slot">
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
    isError?: boolean
}

defineProps<FieldDecorationProps>()
defineOptions({
    inheritAttrs: false,
})
</script>

<style scoped lang="scss">
.field-decoration {
    $b: &;

    &__slot {
        display: flex;
        align-items: center;
        padding: 0 toRem(20);
        border: 3px solid $brand;
        border-radius: toRem(6);
        box-sizing: border-box;
        background-color: $base;
        color: $brand;

        @include transition(border-color);
    }

    &__label {
        font-size: toRem(18);
        line-height: toRem(21);
        font-weight: 400;
        color: $brand;
        margin-bottom: toRem(8);

        @include transition(color);
    }

    &__icon {
        font-size: toRem(20);
    }

    &_is-error {
        #{$b}__slot {
            border-color: $critical;
            color: $critical;
        }
        #{$b}__label {
            color: $critical;
        }
    }
}
</style>
