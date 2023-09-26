<template>
    <div class="select" :class="{ 'select_is-open': isOpen }">
        <field-decoraton
            :label="label"
            :is-error="isError"
            class="select__field-wrapper"
            @click.stop="onClick"
        >
            <div class="select__field">{{ getSelectOption.text }}</div>
            <ui-icon-base class="select__icon" name="arrow_down" />
        </field-decoraton>
        <transition-fade>
            <article
                v-if="isOpen"
                v-click-outside="onClose"
                class="select__options"
            >
                <button
                    v-for="option in options"
                    :key="option.id"
                    :class="[
                        'select__option',
                        { select__option_active: option.id === modelValue },
                    ]"
                    @click.prevent="onSelect(option.id)"
                >
                    {{ option.text }}
                </button>
            </article>
        </transition-fade>
    </div>
</template>

<script setup lang="ts">
import { FieldDecorationProps } from '~/components/field-decoraton.vue'

export type SelectProps = {
    modelValue: Maybe<SelectOption['id']>
    placeholder?: string
    options: SelectOption[]
    label?: FieldDecorationProps['label']
    isError?: boolean
}

const isOpen = ref(false)

const props = defineProps<SelectProps>()
const emit = defineEmits(['update:modelValue', 'update:isError'])

const getSelectOption = computed(() =>
    props.modelValue === null
        ? ''
        : props.options.find(item => item.id === props.modelValue),
)
const optionsToggle = (value: boolean) => {
    isOpen.value = value
}
const onClick = () => {
    optionsToggle(!isOpen.value)
}

const onClose = () => {
    optionsToggle(false)
}

const onSelect = (id: SelectOption['id']) => {
    emit('update:modelValue', id !== props.modelValue ? id : null)
    emit('update:isError', false)
    onClose()
}
</script>

<style scoped lang="scss">
.select {
    $b: &;

    $heightField: toRem(40);

    position: relative;

    &:deep(.select__field-wrapper) {
        height: $heightField;
        cursor: pointer;

        @include transition(border-color);

        &:hover {
            color: $brandHover;
            border-color: $brandHover;
        }
    }

    &__field {
        flex-grow: 1;
    }

    &__icon {
        font-size: toRem(20);
    }

    &_is-open {
        .select__icon {
            transform: rotate3d(1, 0, 0, 180deg);
        }
    }

    &__options {
        position: absolute;
        top: calc(100% + #{toRem(10)});
        left: 0;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: toRem(5);
        padding: toRem(10);
        border: 3px solid $brand;
        border-radius: toRem(6);
        color: $brand;
        background-color: $base;
        box-sizing: border-box;
        z-index: 2;
    }

    &__option {
        border: 2px solid $brandLight;
        border-radius: toRem(4);
        text-align: left;
        padding: toRem(5) toRem(10);
        color: $brand;
        @include transition(border-color);

        &_active,
        &:hover {
            border-color: $brand;
        }
    }

    &:deep(.select__field-wrapper),
    &__option {
        font-size: toRem(16);
        line-height: toRem(18);
        font-weight: 400;
    }
}
</style>
