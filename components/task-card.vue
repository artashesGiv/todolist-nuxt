<template>
    <article class="task-card">
        <div class="task-card__content">
            <div class="task-card__title">{{ title }}</div>
            <div class="task-card__start-date">
                Start date: {{ startDate.toLocaleDateString('ru') }}
            </div>
            <div v-if="endDate" class="task-card__end-date">
                {{ endDate.toLocaleDateString('ru') }}
            </div>
            <div class="task-card__checkbox">
                <ui-checkbox
                    :model-value="isCompleted"
                    @update:model-value="emit('completed', id)"
                    >{{
                        !isCompleted ? 'Mark as completed' : 'completed'
                    }}</ui-checkbox
                >
            </div>
        </div>
        <div class="task-card__buttons">
            <ui-button
                v-for="(button, index) in buttons"
                is-only-icon
                :key="index"
                :icon="button.icon"
                @click="button.onClick"
            />
        </div>
    </article>
</template>

<script setup lang="ts">
import { ButtonProps } from '~/components/ui/button.vue'

export type TaskCardProps = {
    id: Task['id']
    title: Task['title']
    description?: Task['description']
    startDate: Task['startDate']
    endDate?: Task['endDate']
    isCompleted: Task['isCompleted']
}

const props = defineProps<TaskCardProps>()

const emit = defineEmits<{
    info: [id: TaskCardProps['id']]
    edit: [id: TaskCardProps['id']]
    delete: [id: TaskCardProps['id']]
    completed: [id: TaskCardProps['id']]
}>()

const buttons: { icon: Icons; onClick: () => void }[] = [
    {
        icon: 'info-fill',
        onClick: () => emit('info', props.id),
    },
    {
        icon: 'edit',
        onClick: () => emit('edit', props.id),
    },
    {
        icon: 'trash',
        onClick: () => emit('delete', props.id),
    },
]
</script>

<style scoped lang="scss">
.task-card {
    display: inline-flex;
    gap: toRem(64);
    box-sizing: border-box;
    border-radius: toRem(8);
    padding: toRem(14);
    color: $base;
    background-color: $brand;

    &__title {
        font-size: toRem(16);
        line-height: toRem(18);
    }

    &__checkbox {
        font-weight: 400;

        input,
        label {
            cursor: pointer;
        }
    }

    &__start-date,
    &__end-date,
    &__checkbox {
        font-size: toRem(12);
        line-height: toRem(16);
    }

    &__buttons,
    &__content {
        display: flex;
        flex-direction: column;
    }

    &__buttons {
        gap: toRem(12);
    }

    &__content {
        justify-content: space-between;
    }
}
</style>
