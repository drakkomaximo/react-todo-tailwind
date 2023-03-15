export type TodoListProps = {
    todos: Todo[]
    updateTodo: ({id}: updateTodoFuncProps) => void
    removeTodo: ({id}: deleteTodoFuncProps) => void
} 

export type TodoComputedProps = {
    computedItemsLeft: number
    clearCompleted: () => void
    filterOption: FilterOptions
} 

export type TodoFilterProps = {
    changeFilter: ({filter}: changeFilterFuncProps) => void
    filterOption: FilterOptions
} 

export type TodoItemProps = {
    todo: Todo
    updateTodo: ({id}: updateTodoFuncProps) => void
    removeTodo: ({id}: deleteTodoFuncProps) => void
    todoRef: (element?: HTMLElement | null | undefined) => void
}

export type TodoCreateProps = {
    createTodo: ({title}: createTodoFuncProps) => void
}

export type createTodoFuncProps = {
    title: string
}

export type updateTodoFuncProps = {
    id: number
}

export type deleteTodoFuncProps = {
    id: number
}
export type changeFilterFuncProps = {
    filter: FilterOptions
}
export type handleClickToogleThemeFuncProps = {
    theme: boolean
}
export type sortedTodosFuncProps = {
    list: Todo[];
    startIndex: number
    endIndex: number
}

export type Todo = {
    id: number,
    title: string,
    completed: boolean
}

export type FilterOptions = 'all' | 'active' | 'complete'
export type DarkModeOptions = 'dark' | 'light'