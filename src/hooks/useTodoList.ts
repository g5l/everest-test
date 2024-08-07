import { useEffect, useState } from 'react'
import { fetchInitialTodos } from '../services/todoService'
import { TodoEntry, TodoList } from '../types/todo'

const LOCAL_STORAGE_KEY = 'todoList'

export const useTodoList = () => {
  const [todos, setTodos] = useState<TodoList>(() => {
    const storedTodos = localStorage.getItem(LOCAL_STORAGE_KEY)
    return storedTodos ? JSON.parse(storedTodos) : []
  })

  useEffect(() => {
    const loadInitialTodos = async () => {
      const initialTodos = await fetchInitialTodos()
      setTodos(initialTodos)
    }
    loadInitialTodos()
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
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

  return { todos: sortedTodos, addTodo, removeTodo, toggleTodo }
}
