import { TodoList as TodoListType } from '@/types/todo'
import {
  Button,
  Center,
  Checkbox,
  Container,
  Skeleton,
  Stack,
  Text
} from '@mantine/core'
import { IconTrash } from '@tabler/icons-react'
import React, { FC } from 'react'
import styles from './styles.module.css'

export type TodoListProps = {
  todos: TodoListType
  isLoading: boolean
  onRemove: (id: number) => void
  onToggle: (id: number) => void
}

const TodoList: FC<TodoListProps> = ({
  todos = [],
  isLoading,
  onRemove,
  onToggle
}) => {
  const removeTodo = (id: number) => {
    onRemove(id)
  }

  const toggleTodo = (id: number) => {
    onToggle(id)
  }

  if (isLoading) {
    return Array.from({ length: 2 }).map((_, index) => (
      <Skeleton key={index} height={54} mb={6} width="100%" radius="md" />
    ))
  }

  if (todos.length === 0) {
    return (
      <Center>
        <Container>
          <Stack align="center">
            <Text size="xl" weight={500}>
              No tasks yet
            </Text>
            <Text align="center">
              You have no tasks in your to-do list. Add a task to get started!
            </Text>
          </Stack>
        </Container>
      </Center>
    )
  }

  return (
    <ul className={styles.list}>
      {todos.map((todo) => (
        <li key={todo.id} className={styles.item}>
          <Checkbox
            checked={todo.checked}
            onChange={() => toggleTodo(todo.id)}
            label={
              <Text className={todo.checked ? styles.checked : ''}>
                {todo.content}
              </Text>
            }
          />
          <Button
            onClick={() => removeTodo(todo.id)}
            color="red"
            title="Delete"
          >
            <IconTrash />
          </Button>
        </li>
      ))}
    </ul>
  )
}

export default TodoList
