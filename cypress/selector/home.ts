export const headerSelector = {
  input: '[data-test="new-todo-input"]',
  button: '[data-test="add-todo-button"]'
} as const

export const filtersSelector = {
  search: '[data-test="search-input"]'
} as const

export const listSelector = {
  item: '[data-test="todo-item"]',
  emptyState: '[data-test="empty-state"]'
} as const
