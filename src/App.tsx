import Home from '@/pages/Home'
import { theme } from '@/theme'
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
