<template>
    <section>
        <h1>Todolist</h1>
        <task-card v-bind="task" @completed="onCompleted" />
    </section>
</template>

<script setup lang="ts">
import { TaskCardProps } from '~/components/task-card.vue'

const task = useState<TaskCardProps>(() => ({
    id: 1,
    title: 'Learn Javascipt',
    isCompleted: false,
    startDate: new Date(),
}))
const onCompleted = (id: TaskCardProps['id']) => {
    task.value.isCompleted = !task.value.isCompleted
}

definePageMeta({
    name: 'Dashboard',
    position: 1,
    icon: 'dashboard' as Icons,
})
</script>

<style lang="scss">
.btn {
    margin-top: 20px;
}
</style>
