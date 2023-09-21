<template>
    <section>
        <div class="list">
            <task-card
                v-for="task in store.todolist"
                v-bind="task"
                @delete="store.deleteTask"
            />
        </div>
        <div class="qwe">
            <ui-button view="brand" icon="arrow_down" @click="addTask"
                >Add to list</ui-button
            >
            <ui-input
                v-model="value"
                class="input"
                label="Label"
                placeholder="placeholder"
            />
            <ui-input
                v-model="value"
                is-multi-row
                class="input"
                label="Label"
                placeholder="placeholder"
            />
            <ui-input
                v-model="value"
                class="input"
                icon="check-fill"
                label="Label"
                placeholder="placeholder"
            />
            <div>{{ value }}</div>
            <ui-select
                v-model="option"
                :options="options"
                class="input"
                label="Label"
                icon="calendar"
            />
            <div>{{ option }}</div>
            <ui-datepicker
                v-model="picked"
                :min-date="new Date()"
                class="input"
                placeholder="End date"
            />
        </div>
    </section>
</template>

<script setup lang="ts">
import { TaskCardProps } from '~/components/task-card.vue'
import { useTodolistStore } from '~/store'
import { SelectOption } from '~/components/ui/select.vue'

const picked = ref(null)

const value = ref('')
const option = ref(1)
const options: SelectOption[] = [
    {
        id: 1,
        text: '1',
    },
    {
        id: 2,
        text: '2',
    },
    {
        id: 3,
        text: '3',
    },
    {
        id: 4,
        text: '4',
    },
]

definePageMeta({
    name: 'Dashboard',
    position: 1,
    icon: 'dashboard' as Icons,
})

const store = useTodolistStore()

const addTask = () => {
    store.addTask({
        title: 'Learn JavaScript',
        isCompleted: false,
        startDate: new Date(),
        description: 'description',
    })
}
</script>

<style lang="scss">
.input {
    width: 400px;
}

.qwe {
    display: flex;
    flex-direction: column;
    gap: 15px;
}
</style>
