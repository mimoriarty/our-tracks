describe('contents', () => {
  it('has default contents', () => {
    cy.visit('http://localhost:8000/')

    cy.get('[data-testid="layout"] > ul > li').should(($li) => {
      if ($li.length < 3) {
        throw new Error('Must have at least 3 elements')
      }
    })

    cy.get('[data-testid="layout"] img').should(($img) => {
      if ($img.length !== 2) {
        throw new Error('Some images are missing')
      }
    })

    cy.contains('our tracks')
  })
})