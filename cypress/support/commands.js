Cypress.Commands.add('Login', () => {

  let userName = Cypress.env('USERNAME')
  let pass = Cypress.env('PASSWORD')

  cy.log(userName)
  cy.log(pass)
})





