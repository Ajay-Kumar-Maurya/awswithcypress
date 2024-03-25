describe('template spec', () => {
  it('passes', () => {
    console.log(process.platform)
    cy.visit('https://example.cypress.io')
  })
})