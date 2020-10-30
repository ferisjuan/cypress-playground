describe('Scroll on the page', () => {
	it('Should scroll up and down the page', () => {
		cy.visit('https://devexpress.github.io/testcafe/example/')
		cy.wait(2000)
		cy.get('#submit-button').scrollIntoView()
		cy.wait(2000)
		cy.get('header').scrollIntoView()
	})
})
