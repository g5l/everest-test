import { theme } from '@/theme'
import { MantineProvider } from '@mantine/core'
import React from 'react'
import '@mantine/core/styles.css'

export const decorators = [
  (Story: React.JSX.IntrinsicAttributes) => (
    <>
      <MantineProvider theme={theme}>
        <Story />
      </MantineProvider>
    </>
  )
]
export const tags = ['autodocs']
