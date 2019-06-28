describe('just testing', function() {
  it('will just test a few basic things...', function() {

    let userName = Cypress.env('USERNAME')
    let pass = Cypress.env('PASSWORD')

    cy.visit('localhost:8080')
    cy.get('[data-cy=v-container]')
    
    cy.log(userName)
    cy.log(pass)

  })
})
