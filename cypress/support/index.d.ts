declare global {
  namespace Cypress {
    interface Chainable {
      saveStorage(): Chainable
      loadStorage(): Chainable
    }
  }
}
