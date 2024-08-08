import { useEffect, useState } from 'react'
import { getTodos, updateTodos } from '../services/todoService'
import { TodoEntry, TodoList } from '../types/todo'

export const useTodoList = () => {
  const [todos, setTodos] = useState<TodoList>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadInitialTodos = async () => {
      const initialTodos = await getTodos()
      setTodos(initialTodos)
      setIsLoading(false)
    }
    loadInitialTodos()
  }, [])

  useEffect(() => {
    updateTodos(todos)
  }, [todos])

  const addTodo = (content: string) => {
    const newTodo: TodoEntry = {
      id: Date.now(),
      content,
      checked: false
    }
    setTodos((prevTodos) => [...prevTodos, newTodo])
  }

  const removeTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id))
  }

  const toggleTodo = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    )
  }

  const sortedTodos = [...todos].sort((a, b) => {
    if (a.checked === b.checked) return 0
    return a.checked ? 1 : -1
  })

  return { todos: sortedTodos, isLoading, addTodo, removeTodo, toggleTodo }
}
