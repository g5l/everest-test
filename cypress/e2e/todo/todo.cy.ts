import {
  filtersSelector,
  headerSelector,
  listSelector
} from '../../selector/home'

describe('Todo', () => {
  before(() => {
    cy.visit('/')
    cy.wait(1000)
    cy.saveStorage()
  })

  beforeEach(() => {
    cy.visit('/')
    cy.loadStorage()
  })

  const todoItem = 'Walk the dog'

  it('Should add an item to the list', () => {
    cy.get(headerSelector.input).type(todoItem)
    cy.get(headerSelector.button).click()
    cy.get(listSelector.item).contains(todoItem)
  })

  it('Should search for a todo', () => {
    cy.get(filtersSelector.search).type(todoItem)
    cy.get(listSelector.item).contains(todoItem)
  })

  it('Should search for an item that does not exist', () => {
    cy.get(filtersSelector.search).type('not found')
    cy.get(listSelector.item).should('not.exist')
    cy.get(listSelector.emptyState).should('be.visible')
  })
})
