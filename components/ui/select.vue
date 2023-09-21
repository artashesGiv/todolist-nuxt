<template>
    <div class="select" :class="{ 'select_is-open': isOpen }">
        <field-decoraton
            :label="label"
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
                    class="select__option"
                    @click="onSelect(option.id)"
                >
                    {{ option.text }}
                </button>
            </article>
        </transition-fade>
    </div>
</template>

<script setup lang="ts">
import { FieldDecorationProps } from '~/components/field-decoraton.vue'

export type SelectOption = {
    id: number | string
    text: string
}

export type SelectProps = {
    modelValue: Maybe<SelectOption['id']>
    options: SelectOption[]
    label?: FieldDecorationProps['label']
}

const isOpen = useState('isOpen', () => false)

const props = defineProps<SelectProps>()
const emit = defineEmits(['update:modelValue'])

const getSelectOption = computed(() =>
    props.options.find(item => item.id === props.modelValue),
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
    emit('update:modelValue', id)
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
        transition: border-color 0.3s ease;

        &:hover {
            color: $brandHover;
            border-color: $brandHover;
        }
    }

    &__field {
        flex-grow: 1;
        transition: color 0.3s ease;
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
        transition: border 0.3s ease;
        color: $brand;

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
