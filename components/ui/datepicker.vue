<template>
    <div class="datepicker">
        <field-decoraton
            :label="label"
            class="datepicker__wrapper"
            icon="calendar"
            @click.stop="onClick"
        >
            <div class="datepicker__input">
                {{ getValue }}
            </div>
        </field-decoraton>
        <transition-fade>
            <article
                v-if="isShow"
                v-click-outside="onClose"
                class="datepicker__calendar"
            >
                <date-picker
                    v-model="modelValue"
                    locale="ru"
                    :placeholder="placeholder"
                    :min-date="minDate"
                    :max-date="maxDate"
                />
            </article>
        </transition-fade>
    </div>
</template>

<script setup lang="ts">
import { DatePicker } from 'v-calendar'

export type DatepickerProps = {
    modelValue: Maybe<Date>
    placeholder?: string
    label?: string
    minDate?: Date
    maxDate?: Date
}

const props = defineProps<DatepickerProps>()
const emit = defineEmits(['update:modelValue'])

const modelValue = computed({
    get: () => props.modelValue,
    set: value => emit('update:modelValue', value),
})

const isShow = useState('is-show', () => false)

const isShowToggle = (value: boolean) => {
    isShow.value = value
}

const onClose = () => {
    isShowToggle(false)
}

const onClick = () => {
    isShowToggle(!isShow.value)
}

const getValue = computed(() =>
    props.modelValue
        ? props.modelValue.toLocaleDateString('ru')
        : props.placeholder,
)
</script>

<style scoped lang="scss">
.datepicker {
    position: relative;

    &:deep(.datepicker__wrapper) {
        height: toRem(40);
        cursor: pointer;
        transition: border-color 0.3s ease;

        &:hover {
            color: $brandHover;
            border-color: $brandHover;
        }
    }

    &__input {
        flex-grow: 1;
    }

    &__calendar {
        position: absolute;
        right: 0;
        top: calc(100% + #{toRem(10)});
        z-index: 2;

        &:deep(.vc-container) {
            background-color: $base;
        }

        &:deep(.vc-bordered) {
            border: 3px solid $brand;
            border-radius: toRem(6);
        }
    }
}
</style>
