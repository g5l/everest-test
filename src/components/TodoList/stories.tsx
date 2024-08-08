import { Meta, StoryObj } from '@storybook/react'
import TodoList from '.'

export default {
  title: 'TodoList',
  component: TodoList
} as Meta

export const Default: StoryObj = {}

export const WithLoading: StoryObj = {
  args: {
    isLoading: true
  }
}

export const WithTodos: StoryObj = {
  args: {
    todos: [
      { id: 1, content: 'Buy groceries', checked: false },
      { id: 2, content: 'Walk the dog', checked: true },
      { id: 3, content: 'Do laundry', checked: false }
    ]
  }
}
