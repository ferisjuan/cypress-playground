describe('Custom Commands', () => {
	it('should login ton application using custom cypress command', () => {
		cy.visit('http://zero.webappsecurity.com/login.html')
		cy.login('username', 'password')
	})
})
