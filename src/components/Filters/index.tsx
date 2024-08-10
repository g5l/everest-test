import { FilterStatusEnum } from '@/constants/filter'
import { FilterStateType } from '@/types/filter'
import { desktopSize } from '@/util/responsive'
import { Button, Group, TextInput } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { IconSearch } from '@tabler/icons-react'
import React, { FC } from 'react'
import styles from './styles.module.css'

type FiltersProps = {
  filter: FilterStateType
  className?: string
  onFilterChange: (filter: FilterStateType) => void
}

type FilterButtonProps = {
  isActive: boolean
  onClick: () => void
  children: React.ReactNode
}

const FilterButton: FC<FilterButtonProps> = ({
  isActive,
  onClick,
  children
}) => {
  return (
    <Button variant={isActive ? 'filled' : 'light'} onClick={onClick}>
      {children}
    </Button>
  )
}

const Filters: FC<FiltersProps> = ({ filter, className, onFilterChange }) => {
  const search = filter?.search ? filter.search : ''
  const status = filter?.status ? filter.status : FilterStatusEnum.ALL

  const isDesktop = useMediaQuery(desktopSize)

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onFilterChange({ ...filter, search: event.target.value })
  }

  const handleCompletedFilter = (status: FilterStatusEnum) => {
    onFilterChange({ ...filter, status })
  }

  return (
    <Group gap={10} wrap={isDesktop ? 'nowrap' : 'wrap'} className={className}>
      <TextInput
        placeholder="Search todos"
        value={search}
        className={styles.search}
        leftSection={<IconSearch size={18} />}
        data-test="search-input"
        onChange={handleSearchChange}
      />
      <Group gap={5} wrap="nowrap">
        <FilterButton
          isActive={status === FilterStatusEnum.ALL}
          onClick={() => handleCompletedFilter(FilterStatusEnum.ALL)}
        >
          All
        </FilterButton>
        <FilterButton
          isActive={status === FilterStatusEnum.COMPLETED}
          onClick={() => handleCompletedFilter(FilterStatusEnum.COMPLETED)}
        >
          Completed
        </FilterButton>
        <FilterButton
          isActive={status === FilterStatusEnum.UNCOMPLETED}
          onClick={() => handleCompletedFilter(FilterStatusEnum.UNCOMPLETED)}
        >
          Uncompleted
        </FilterButton>
      </Group>
    </Group>
  )
}

export default Filters
