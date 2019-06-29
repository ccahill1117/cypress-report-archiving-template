describe('just testing', function() {
  it('will just test a few basic things...', function() {

    let userName = Cypress.env('USERNAME')
    let pass = Cypress.env('PASSWORD')

    cy.visit('localhost:8080/#/testPage')

    cy.get('[data-cy=passField]')
      .type(pass)
    cy.get('[data-cy=userField]')
      .type(userName)
    
    cy.get('[data-cy=typedUserName]').contains(userName)

    cy.get('[data-cy=typedPassword]').contains(pass)


  })
})
