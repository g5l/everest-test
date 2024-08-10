import { TodoList } from '@/types/todo'
import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL

if (!API_URL) {
  throw new Error('VITE_API_URL is not defined in the environment variables')
}

type ApiResponse = {
  todos: TodoList
}

type FetchTodosResult = {
  data: TodoList
  error: Error | null
}

export const fetchTodos = async (): Promise<FetchTodosResult> => {
  try {
    const response = await axios.get<ApiResponse>(API_URL)
    return { data: response.data.todos || [], error: null }
  } catch (error) {
    console.error('Error fetching todos:', error)
    if (axios.isAxiosError(error)) {
      return {
        data: [],
        error: new Error(
          error.message || 'An error occurred while fetching todos'
        )
      }
    }
    return {
      data: [],
      error:
        error instanceof Error ? error : new Error('An unknown error occurred')
    }
  }
}
