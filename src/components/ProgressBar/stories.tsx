import { Meta, StoryObj } from '@storybook/react'
import ProgressBar from '.'

export default {
  title: 'ProgressBar',
  component: ProgressBar
} as Meta

export const Default: StoryObj = {
  args: {
    completed: 0,
    total: 10
  }
}

export const WithProgress: StoryObj = {
  args: {
    completed: 5,
    total: 10
  }
}
