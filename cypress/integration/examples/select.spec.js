describe('Select Box', () => {
	it('Should load website wwith select box', () => {
		cy.visit('https://devexpress.github.io/testcafe/example/')
	})

	it('Should select an option from select box', () => {
		cy.get('#preferred-interface').as('select')
		cy.get('@select').select('Both')
		cy.get('@select').should('have.value', 'Both')

		cy.get('@select').select('JavaScript API')
		cy.get('@select').should('have.value', 'JavaScript API')
	})
})
