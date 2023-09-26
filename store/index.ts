import { v4 } from 'uuid'

export const useTodolistStore = defineStore('todolist', () => {
    const todolist = useState<Task[]>('todolist', () => [])

    const addTask = (task: TaskForEdit) => {
        todolist.value.push({
            id: v4(),
            endDate: null,
            ...task,
        })
    }

    const deleteTask = (id: Task['id']) => {
        todolist.value = todolist.value.filter(item => item.id != id)
    }

    return {
        todolist,
        addTask,
        deleteTask,
    }
})
