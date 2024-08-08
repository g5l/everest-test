import HeaderForm from '@/components/HeaderForm'
import TodoList from '@/components/TodoList'
import { useTodoList } from '@/hooks/useTodoList'
import { Box, Container } from '@mantine/core'
import React, { FC } from 'react'
import styles from './styles.module.css'

const Index: FC = () => {
  const { todos, isLoading, addTodo, removeTodo, toggleTodo } = useTodoList()

  return (
    <div className={styles.container}>
      <Box className={styles.header}>
        <Container className={styles.headerForm} size="xs">
          <HeaderForm onAdd={addTodo} />
        </Container>
      </Box>
      <Container size="xs">
        <TodoList
          todos={todos}
          onRemove={removeTodo}
          onToggle={toggleTodo}
          isLoading={isLoading}
        />
      </Container>
    </div>
  )
}

export default Index
