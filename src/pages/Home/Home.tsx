import { FC, useState } from 'react'
import { Box, TextInput, Button, Checkbox, Text } from '@mantine/core'
import { useTodoList } from '@/hooks/useTodoList'
import styles from './styles.module.css'

const Home: FC = () => {
  const { todos, addTodo, removeTodo, toggleTodo } = useTodoList()
  const [newTodoContent, setNewTodoContent] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (newTodoContent.trim()) {
      addTodo(newTodoContent.trim())
      setNewTodoContent('')
    }
  }

  return (
    <Box className={styles.todoApp}>
      <form onSubmit={handleSubmit} className={styles.todoForm}>
        <TextInput
          value={newTodoContent}
          onChange={(e) => setNewTodoContent(e.target.value)}
          placeholder="Add a new todo"
          required
          className={styles.todoInput}
        />
        <Button type="submit" disabled={!newTodoContent.trim()}>
          Add
        </Button>
      </form>
      <ul className={styles.todoList}>
        {todos.map((todo) => (
          <li key={todo.id} className={styles.todoItem}>
            <Checkbox
              checked={todo.checked}
              onChange={() => toggleTodo(todo.id)}
              label={
                <Text className={todo.checked ? styles.checkedTodo : ''}>
                  {todo.content}
                </Text>
              }
            />
            <Button onClick={() => removeTodo(todo.id)} color="red" compact>
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </Box>
  )
}

export default Home
