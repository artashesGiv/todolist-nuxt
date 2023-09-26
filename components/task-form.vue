<template>
    <form class="task-form">
        <component
            v-for="(value, key) in data"
            v-model="props.modelValue[key]"
            v-bind="value.bind"
            :is="value.component"
            :is-error="getIsError(key)"
            :class="['task-form__item', `task-form__${value.class}`]"
            @update:isError="updateIsError(key)"
        />
    </form>
</template>

<script setup lang="ts">
import { DatepickerProps } from '~/components/ui/datepicker.vue'
import { SelectOption, SelectProps } from '~/components/ui/select.vue'
import { InputProps } from '~/components/ui/input.vue'

type FieldName = keyof TaskForEdit
type DataType = Record<FieldName, { class: string; bind?: any; component: any }>

export type TaskFormProps = {
    modelValue: TaskForEdit
    errors: FieldName[]
}

const props = defineProps<TaskFormProps>()
const emit = defineEmits(['update:errors'])

const data: DataType = {
    title: {
        class: 'title',
        component: resolveComponent('ui-input'),
        bind: {
            label: 'Task title',
        } as InputProps,
    },
    startDate: {
        class: 'start-date',
        component: resolveComponent('ui-datepicker'),
        bind: {
            label: 'Start date',
        } as DatepickerProps,
    },
    planeEndDate: {
        class: 'plane-end-date',
        component: resolveComponent('ui-datepicker'),
        bind: {
            label: 'End date',
        } as DatepickerProps,
    },
    category: {
        class: 'categories',
        component: resolveComponent('ui-select'),
        bind: {
            options: categories,
            label: 'Category',
        } as SelectProps,
    },
    priority: {
        class: 'priority',
        component: resolveComponent('ui-select'),
        bind: {
            options: priorities,
            label: 'Priority level',
        } as SelectProps,
    },
    description: {
        class: 'description',
        component: resolveComponent('ui-input'),
        bind: {
            isMultiRow: true,
            label: 'Description task',
        } as InputProps,
    },
}

const getIsError = (field: FieldName) => {
    return props.errors.includes(field)
}

const updateIsError = (field: FieldName) => {
    emit(
        'update:errors',
        props.errors.filter(item => item !== field),
    )
}
</script>

<style scoped lang="scss">
.task-form {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: toRem(20);
    grid-row-gap: toRem(20);

    &__title {
        grid-area: 1 / 1 / 2 / 3;
    }
    &__start-date {
        grid-area: 2 / 1 / 3 / 2;
    }
    &__plane-end-date {
        grid-area: 2 / 2 / 3 / 3;
    }
    &__priority {
        grid-area: 3 / 1 / 4 / 2;
    }
    &__categories {
        grid-area: 3 / 2 / 4 / 3;
    }
    &__description {
        grid-area: 4 / 1 / 5 / 3;
    }
}
</style>
