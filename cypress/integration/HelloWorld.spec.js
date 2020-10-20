context('HelloWorld', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  describe('Component', () => {
    it('displays hello world', () => {
      cy.get("h1").should('have.text', "Hello Vue 3.0 + Vite")
    })
  })
})