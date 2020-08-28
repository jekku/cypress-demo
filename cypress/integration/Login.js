context('Matt authentication', () => {
  it('Renders the login page correctly', () => {
    cy.visit('https://matt-awesome-staging.herokuapp.com/')

    cy.get('.generic-form.-signin')
      .find('.form-field')
      .eq(0)
      .should('contain', 'Email')

    cy.get('.generic-form.-signin')
      .find('.form-field')
      .eq(1)
      .should('contain', 'Password')
  })

  it('Redirects to the organization dashboard on successful login', () => {
    cy.visit('https://matt-awesome-staging.herokuapp.com/')

    cy.get('.generic-form.-signin')
      .find('.form-field')
      .eq(0)
      .find('input')
      .type('matterman-1@mashup.com')

    cy.get('.generic-form.-signin')
      .find('.form-field')
      .eq(1)
      .find('input')
      .type('password')

    cy.get('.new-button').click()
  })

  it('Redirects to the login page on invalid login', () => {
    cy.visit('https://matt-awesome-staging.herokuapp.com/')

    cy.get('.generic-form.-signin')
      .find('.form-field')
      .eq(0)
      .find('input')
      .type('matterman-1@mashup.com')

    cy.get('.generic-form.-signin')
      .find('.form-field')
      .eq(1)
      .find('input')
      .type('tite')

    cy.get('.new-button').click()
  })
})
