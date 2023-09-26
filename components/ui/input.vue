<template>
    <div class="input" :class="{ 'input_is-multirow': isMultiRow }">
        <field-decoraton
            :label="label"
            :icon="getIcon"
            :is-error="isError"
            class="input__wrapper"
        >
            <input
                v-if="!isMultiRow"
                :placeholder="placeholder"
                :value="modelValue"
                class="input__value"
                type="text"
                @input="onInput"
            />

            <textarea
                v-if="isMultiRow"
                :placeholder="placeholder"
                :value="modelValue"
                class="input__value"
                type="text"
                @input="onInput"
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
    isError?: boolean
}

const props = defineProps<InputProps>()
const emit = defineEmits(['update:isError', 'update:modelValue'])

const getIcon = computed(() =>
    !props.isMultiRow && props.icon ? props.icon : undefined,
)

const onInput = (event: InputEvent) => {
    emit('update:modelValue', (event.target as HTMLInputElement).value)
    emit('update:isError', false)
}
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
