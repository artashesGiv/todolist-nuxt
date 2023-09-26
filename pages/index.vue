<template>
    <section class="dashboard-page container">
        <task-form v-model="task" v-model:errors="errors" />
        <ui-button view="brand" @click="validate">validate</ui-button>
    </section>
</template>

<script setup lang="ts">
import { TaskFormProps } from '~/components/task-form.vue'

definePageMeta({
    name: 'Dashboard',
    position: 1,
    icon: 'dashboard' as Icons,
})

const errors = ref<TaskFormProps['errors']>([])
const validate = () => {
    Object.entries(task.value).forEach(([key, value]) => {
        if (
            !value &&
            key !== 'description' &&
            key !== 'isCompleted' &&
            !errors.value.includes(key)
        ) {
            errors.value.push(key)
        }
    })
}

const task = ref<TaskForEdit>({
    title: 'Learn JavaScript',
    startDate: new Date(),
    description: 'description',
    planeEndDate: new Date(),
    priority: 1,
    category: 1,
})
</script>

<style lang="scss"></style>
