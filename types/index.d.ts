declare global {
    type Maybe<T> = T | null | undefined

    type Task = {
        id: number | string
        title: string
        description: Maybe<string>
        startDate: Date
        endDate: Maybe<Date>
        isCompleted: boolean
    }

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
