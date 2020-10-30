describe('Login with Fixtures Data', () => {
	it('should try to login', () => {
		cy.visit('http://zero.webappsecurity.com/login.html')

		cy.fixture('user').then(user => {
			const { username, password } = user

			cy.get('#user_login').type(username)
			cy.get('#user_password').type(password)

			cy.get('.btn-primary').contains('Sign in').click()
		})
	})
})
