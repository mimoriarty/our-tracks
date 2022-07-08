describe('test menu', () => {
  it('show/hide menu', () => {
    cy.visit('http://localhost:8000/')
    cy.get('[data-testid=menu]').should('have.css', 'transform', 'matrix(1, 0, 0, 1, 360, 0)')
    cy.get('[data-testid=layout] button').click()
    cy.get('[data-testid=menu]').should('have.css', 'transform', 'matrix(1, 0, 0, 1, 0, 0)')
  })
})