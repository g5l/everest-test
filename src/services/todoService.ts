import { fetchTodos } from '@/api/todoApi.ts'
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

const isValidTodoEntry = (entry: UnknownTodoEntry): entry is TodoEntry => {
  return (
    typeof entry.id === 'number' &&
    typeof entry.content === 'string' &&
    typeof entry.checked === 'boolean'
  )
}
