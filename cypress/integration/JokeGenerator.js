/**
1.) We visited the url tashdiaz.github.io
2.) We checked if there was a question and a button
*/

context('Knock Knock joke generator', () => {
  it('Shows a question and a button when we visit', () => {
    cy.visit('https://tashdiaz.github.io/')
    cy.get('h2').should('contain', 'tash')
    cy.get('button').first().should('contain', 'Ano yon?')

  })

  it('Shows an answer after clicking a button', () => {
    cy.visit('https://tashdiaz.github.io/')
    cy.get('button').first().click()

    cy.get('h1').should('contain', 'tash')
  })
})
