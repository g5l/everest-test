import Home from '@/pages/Home/Home'
import { theme } from '@/theme.ts'
import { MantineProvider } from '@mantine/core'
import { FC } from 'react'
import '@mantine/core/styles.css'

const App: FC = () => {
  return (
    <MantineProvider theme={theme}>
      <Home />
    </MantineProvider>
  )
}

export default App
