import { fetchTodos } from '@/api/todoApi'
import { FilterStatusEnum } from '@/constants/filter'
import { FilterStateType } from '@/types/filter'
import { TodoEntry, TodoList } from '@/types/todo'

const LOCAL_STORAGE_KEY = 'todoList'

type UnknownTodoEntry = {
  [K in keyof TodoEntry]: unknown
}

export const getTodos = async (): Promise<TodoList> => {
  let storedTodos = localStorage.getItem(LOCAL_STORAGE_KEY)
  storedTodos = JSON.parse(storedTodos)
  if (storedTodos.length > 0) return storedTodos

  const response = await fetchTodos()
  const todos = response.data || []
  return todos.filter(isValidTodoEntry)
}

export const updateTodos = (todos: TodoList) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
}

export const getCompletedTodos = (todos: TodoList): number => {
  return todos.filter((todo) => todo.checked).length
}

export const filterTodos = (
  todos: TodoList,
  filter: FilterStateType
): TodoList => {
  return todos.filter((todo) => {
    const matchesSearch = todo.content
      .toLowerCase()
      .includes(filter.search.toLowerCase())
    const matchesStatus = (
      todo: TodoEntry,
      status: FilterStatusEnum
    ): boolean => {
      switch (status) {
        case FilterStatusEnum.ALL:
          return true
        case FilterStatusEnum.COMPLETED:
          return todo.checked
        case FilterStatusEnum.UNCOMPLETED:
          return !todo.checked
        default:
          return true
      }
    }

    return matchesSearch && matchesStatus(todo, filter.status)
  })
}

const isValidTodoEntry = (entry: UnknownTodoEntry): entry is TodoEntry => {
  return (
    typeof entry.id === 'number' &&
    typeof entry.content === 'string' &&
    typeof entry.checked === 'boolean'
  )
}
