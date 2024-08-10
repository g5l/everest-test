import { Button, TextInput } from '@mantine/core'
import React, { FC, useState } from 'react'
import styles from './styles.module.css'

type HeaderFormProps = {
  onAdd: (value: string) => void
}

const HeaderForm: FC<HeaderFormProps> = ({ onAdd }) => {
  const [newTodoContent, setNewTodoContent] = useState('')

  const add = (e: React.FormEvent) => {
    e.preventDefault()
    if (!isEmpty) {
      onAdd && onAdd(newTodoContent.trim())
      setNewTodoContent('')
    }
  }

  const isEmpty: boolean = newTodoContent.trim() === ''

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodoContent(e.target.value)
  }

  return (
    <form onSubmit={add} className={styles.form}>
      <TextInput
        value={newTodoContent}
        onChange={handleInputChange}
        placeholder="Add a new todo"
        required
        data-test="new-todo-input"
        className={styles.input}
      />
      <Button type="submit" disabled={isEmpty} data-test="add-todo-button">
        ADD
      </Button>
    </form>
  )
}

export default HeaderForm
