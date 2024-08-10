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
import { AnimatePresence, motion } from 'framer-motion'
import React, { FC, KeyboardEvent, useRef } from 'react'
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
  const todoRefs = useRef<(HTMLLIElement | null)[]>([])

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
            <Text size="xl" weight={500} data-test="empty-state">
              No tasks found
            </Text>
            <Text align="center">You have no tasks in your to-do list.</Text>
          </Stack>
        </Container>
      </Center>
    )
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLLIElement>, index: number) => {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        if (index < todos.length - 1) {
          todoRefs.current[index + 1]?.focus()
        }
        break
      case 'ArrowUp':
        e.preventDefault()
        if (index > 0) {
          todoRefs.current[index - 1]?.focus()
        }
        break
      case 'Enter':
        toggleTodo(todos[index].id)
        break
      case 'Delete':
        removeTodo(todos[index].id)
        break
    }
  }

  return (
    <motion.ul className={styles.list} role="list">
      <AnimatePresence>
        {todos.map((todo, index) => (
          <motion.li
            key={todo.id}
            className={styles.item}
            ref={(el) => (todoRefs.current[index] = el)}
            tabIndex={0}
            role="listitem"
            onKeyDown={(e) => handleKeyDown(e, index)}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            layout
          >
            <Checkbox
              checked={todo.checked}
              onChange={() => toggleTodo(todo.id)}
              label={
                <Text
                  className={todo.checked ? styles.checked : ''}
                  data-test="todo-item"
                >
                  {todo.content}
                </Text>
              }
              aria-label={`Mark "${todo.content}" as ${todo.checked ? 'uncompleted' : 'completed'}`}
            />
            <Button
              onClick={() => removeTodo(todo.id)}
              color="red"
              title="Delete"
            >
              <IconTrash />
            </Button>
          </motion.li>
        ))}
      </AnimatePresence>
    </motion.ul>
  )
}

export default TodoList
