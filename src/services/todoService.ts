import { TodoEntry, TodoList } from '@/types/todo'
import axios from 'axios'

type UnknownTodoEntry = {
  [K in keyof TodoEntry]: unknown
}

const API_URL =
  'https://everest-interview-public-files.s3.amazonaws.com/input.json'

export const fetchInitialTodos = async (): Promise<TodoList> => {
  try {
    const response = await axios.get<TodoList>(API_URL)
    const todos = response.data.todos || []
    return todos.filter(isValidTodoEntry)
  } catch (error) {
    console.error('Error fetching initial todos:', error)
    return []
  }
}

const isValidTodoEntry = (entry: UnknownTodoEntry): entry is TodoEntry => {
  return (
    typeof entry.id === 'number' &&
    typeof entry.content === 'string' &&
    typeof entry.checked === 'boolean'
  )
}
