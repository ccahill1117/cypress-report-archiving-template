describe('Login and Logout', function() {
  it('login and logout', function() {
    cy.Login()
    cy.visit('localhost:8080')
    cy.get('[data-cy=v-container]')
  })
})
