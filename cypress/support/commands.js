// import '@testing-library/cypress/add-commands'
// aqui podemos criar nossas proprias consultas de testes, no arquivo command.js do support 
Cypress.Commands.add('getByData', (seletor) => { 
    return cy.get(`[data-test=${seletor}]`)
})