describe('ImageList', () => {
    before(() => {
      cy.setToken()
      cy.saveLocalStorage()
    });

    beforeEach(() => {
      cy.restoreLocalStorage()
      cy.visit('/')
    });

    it('user can log in and view the imageList', () => {
        cy.get('.column').should('have.length.gt', 1)
      })

    it('user can delete an image', () => {
        cy.get('.column').then((columnObj) => {
            let count = Cypress.$(columnObj).length
            cy.get('.column').first().find('button').click()
            cy.get('.column').should('have.length', parseInt(count - 1, 10))
        })
    })
  })



