const storageCache = {}
Cypress.Commands.add('saveStorage', () => {
  Object.keys(localStorage).forEach((key) => {
    storageCache[key] = localStorage[key]
  })
})

Cypress.Commands.add('loadStorage', () => {
  Object.keys(storageCache).forEach((key) => {
    localStorage.setItem(key, storageCache[key])
  })
})
