context('HelloWorld', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('displays content', () => {
    cy.get("[data-page-title]").should('have.text', "About this guide")
    cy.get('video').should('be.visible')
    cy.get('.nuxt-content').should('be.visible')
  })

  it('navigates to another video', () => {
    cy.get('aside li:eq(2) > a').click()
    cy.get("[data-page-title]").should('have.text', "What is PATCHES?")
  })
})
