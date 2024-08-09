import { Box, Text } from '@mantine/core'
import { motion } from 'framer-motion'
import { FC } from 'react'
import styles from './styles.module.css'

export type ProgressBarProps = {
  completed: number
  total: number
}

const ProgressBar: FC<ProgressBarProps> = ({ completed, total }) => {
  const percentage = (completed / total) * 100

  return (
    <Box className={styles.container}>
      <Box
        component={motion.div}
        className={styles.progressBar}
        style={{ width: `${percentage}%` }}
      >
        <Text className={styles.text}>
          {completed} / {total} tasks completed
        </Text>
      </Box>
    </Box>
  )
}

export default ProgressBar
