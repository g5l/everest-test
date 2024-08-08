import { TodoList } from '@/types/todo'
import axios from 'axios'

const API_URL =
  'https://everest-interview-public-files.s3.amazonaws.com/input.json'

type ApiResponse = {
  data: TodoList
  error: null
}

export const fetchTodos = async (): Promise<ApiResponse> => {
  try {
    const response = await axios.get<TodoList>(API_URL)
    return { data: response.data.todos || [], error: null }
  } catch (error) {
    console.error('Error fetching todos:', error)
    return { data: [], error: error }
  }
}
