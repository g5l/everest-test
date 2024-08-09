import Filters from '@/components/Filters'
import HeaderForm from '@/components/HeaderForm'
import ProgressBar from '@/components/ProgressBar'
import TodoList from '@/components/TodoList'
import { FilterStatusEnum } from '@/constants/filter'
import { useTodoList } from '@/hooks/useTodoList'
import { filterTodos, getCompletedTodos } from '@/services/todoService'
import { FilterStateType } from '@/types/filter'
import { Box, Container } from '@mantine/core'
import React, { FC, useMemo, useState } from 'react'
import styles from './styles.module.css'

const Index: FC = () => {
  const { todos, isLoading, addTodo, removeTodo, toggleTodo } = useTodoList()
  const [filter, setFilter] = useState<FilterStateType>({
    search: '',
    status: FilterStatusEnum.ALL
  })

  const filteredTodos = useMemo(() => {
    return filterTodos(todos, filter)
  }, [todos, filter])

  const completed = getCompletedTodos(todos)
  const total = todos.length

  return (
    <div className={styles.container}>
      <Box className={styles.header}>
        <Container className={styles.headerForm} size="xs">
          <HeaderForm onAdd={addTodo} />
        </Container>
      </Box>
      <Container mt="md" size="xs">
        <ProgressBar completed={completed} total={total} />
        <Filters
          filter={filter}
          onFilterChange={setFilter}
          className={styles.filters}
        />
        <TodoList
          todos={filteredTodos}
          onRemove={removeTodo}
          onToggle={toggleTodo}
          isLoading={isLoading}
        />
      </Container>
    </div>
  )
}

export default Index
