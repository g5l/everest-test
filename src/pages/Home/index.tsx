import HeaderForm from '@/components/HeaderForm'
import TodoList from '@/components/TodoList'
import { useTodoList } from '@/hooks/useTodoList'
import { Box } from '@mantine/core'
import React, { FC } from 'react'
import styles from './styles.module.css'

const Index: FC = () => {
  const { todos, addTodo, removeTodo, toggleTodo } = useTodoList()

  return (
    <Box className={styles.container}>
      <HeaderForm onAdd={addTodo} />
      <TodoList todos={todos} onRemove={removeTodo} onToggle={toggleTodo} />
    </Box>
  )
}

export default Index
