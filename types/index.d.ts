declare global {
    type Maybe<T> = T | null | undefined

    type SelectOption = {
        id: number | string
        text: string
    }

    type Task = {
        id: number | string
        title: string
        description: Maybe<string>
        startDate: Date
        planeEndDate: Date
        endDate: Maybe<Date>
        category: Maybe<number | string>
        priority: Maybe<1 | 2 | 3>
    }

    type TaskForEdit = Omit<Task, 'id' | 'endDate'>

    type Icons =
        | 'check-fill'
        | 'dashboard'
        | 'edit'
        | 'info-fill'
        | 'layout'
        | 'plus-fill'
        | 'search'
        | 'theme'
        | 'trash'
        | 'calendar'
        | 'arrow_down'
}

declare module '#app' {
    interface PageMeta {
        position: number
        icon?: Icons
    }
}

export {}
