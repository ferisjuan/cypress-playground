describe('Cypress.$ function', () => {
	before(function () {
		cy.visit('http://zero.webappsecurity.com/index.html')
	})
	it('Should expose jQuery element in the current windoe', () => {
		const signInButton = Cypress.$('#signin_button')
		signInButton.click()
	})
})
