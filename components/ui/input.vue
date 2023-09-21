<template>
    <div class="input" :class="{ 'input_is-multirow': isMultiRow }">
        <field-decoraton class="input__wrapper" :label="label" :icon="getIcon">
            <input
                v-if="!isMultiRow"
                :placeholder="placeholder"
                :value="modelValue"
                class="input__value"
                type="text"
                @input="$emit('update:modelValue', $event.target.value)"
            />

            <textarea
                v-if="isMultiRow"
                :placeholder="placeholder"
                :value="modelValue"
                class="input__value"
                type="text"
                @input="$emit('update:modelValue', $event.target.value)"
            />
        </field-decoraton>
    </div>
</template>

<script setup lang="ts">
import { FieldDecorationProps } from '~/components/field-decoraton.vue'

export type InputProps = {
    modelValue: string
    icon?: Icons
    placeholder?: string
    isMultiRow?: boolean
    label?: FieldDecorationProps['label']
}

const props = defineProps<InputProps>()

const getIcon = computed(() =>
    !props.isMultiRow && props.icon ? props.icon : undefined,
)
</script>

<style scoped lang="scss">
.input {
    $b: &;

    &:deep(.input__wrapper) {
        height: toRem(40);
    }

    &_is-multirow {
        &:deep(.input__wrapper) {
            min-height: toRem(140);
        }

        #{$b}__value {
            resize: none;
            padding-top: toRem(10);
            padding-bottom: toRem(10);
            padding-right: toRem(10);
        }
    }

    &__value {
        font-size: toRem(16);
        line-height: toRem(18);
        height: 100%;
        color: $brand;
    }

    &__value::placeholder {
        color: $brandLight;
    }
}
</style>
