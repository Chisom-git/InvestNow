describe('User Login', () => {
  it('User is able to Login successfully', () => {
    cy.visit('/')
    cy.get('#_r_3_-form-item').should('be.visible').click()
    cy.get('input#_r_3_-form-item').should('exist').type('chisom94@gmail.com')
    cy.get('input#_r_4_-form-item').should('exist').type('Lagos#234')
    cy.get('button[type=submit]').contains('Login').should('be.visible').and('exist').click()
    // cy.get('button').contains('Login').click()
  })
})