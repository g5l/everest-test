import {
  filtersSelector,
  headerSelector,
  listSelector
} from '../../selector/home'

describe('Todo', () => {
  const shouldRunTest = () => {
    beforeEach(() => {
      cy.visit('/')
      cy.loadStorage()
      cy.wait(1000)
    })

    afterEach(() => {
      cy.saveStorage()
    })

    const todoItem = 'Walk the dog'

    it('Should add an item to the list', () => {
      cy.get(headerSelector.input).type(todoItem)
      cy.get(headerSelector.button).click()
      cy.wait(1000)
      cy.get(listSelector.item).contains(todoItem)
    })

    it('Should search for a todo', () => {
      cy.get(filtersSelector.search).type(todoItem)
      cy.wait(1000)
      cy.get(listSelector.item).contains(todoItem)
    })

    it('Should search for an item that does not exist', () => {
      cy.get(filtersSelector.search).type('not found')
      cy.get(listSelector.item).should('not.exist')
      cy.get(listSelector.emptyState).should('be.visible')
    })
  }

  describe('Desktop', () => {
    shouldRunTest()
  })

  describe('Mobile', () => {
    beforeEach(() => {
      cy.viewport(360, 640)
    })

    shouldRunTest()
  })
})
