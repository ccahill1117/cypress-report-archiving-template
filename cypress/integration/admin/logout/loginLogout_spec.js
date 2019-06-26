describe('Login and Logout', function() {
  it('login and logout', function() {
    cy.visit('localhost:8080')
    cy.Login()
    cy.get('[data-cy=loggedInItem]')
    cy.Logout()
    cy.get('[data-cy=loggedOutItem]')
  })
})
