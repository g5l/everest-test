import { Button } from '@mantine/core'
import React, { FC } from 'react'

export type FilterStatusButtonProps = {
  isActive: boolean
  onClick: () => void
  children: React.ReactNode
}

const FilterStatusButton: FC<FilterStatusButtonProps> = ({
  isActive,
  onClick,
  children
}) => (
  <Button variant={isActive ? 'filled' : 'light'} onClick={onClick}>
    {children}
  </Button>
)

export default FilterStatusButton
