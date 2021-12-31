import "cypress-localstorage-commands"

Cypress.Commands.add('setToken', () => {
    cy.setLocalStorage("imgur_token", Cypress.env('access_token'));
});
