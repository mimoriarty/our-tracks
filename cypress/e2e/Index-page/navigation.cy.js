describe('test navigation', () => {
  it('navigates to track page', () => {
    cy.visit('http://localhost:8000/')

    cy.get('[data-icon=compass]').first().click()

    cy.url().should('include', '/track/')
  })

  it('navigates to news page', () => {
    cy.visit('http://localhost:8000/')

    cy.get('[data-icon=newspaper]').click()

    cy.url().should('include', '/caring')
  })

  it('navigates to gallery page', () => {
    cy.visit('http://localhost:8000/')

    cy.get('[data-icon=photo-film]').click()

    cy.url().should('include', '/gallery')
  })

  it('navigates to help page', () => {
    cy.visit('http://localhost:8000/')

    cy.get('[href="/help"]').click()

    cy.url().should('include', '/help')
  })
})