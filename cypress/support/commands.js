Cypress.Commands.add('Login', () => {

  let userName = Cypress.env('USERNAME')
  let pass = Cypress.env('PASSWORD')

  cy.visit('localhost:8080')
  cy.get('[data-cy="userEmail"]')
      .type(userName)
      .should('have.value', userName)
    cy.get('[data-cy="userPass"]')
      .type(pass)
      .should('have.value', pass)
    cy.get('[data-cy="loginSubmit"]').click()
    cy.wait(10000)
    // confirm url changes
    cy.get('body')
      .contains(userName)
})

Cypress.Commands.add('Logout', () => {
  cy.get('[data-cy=logoutAdminUI]')
    .click()
})



