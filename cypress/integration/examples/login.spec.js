describe('Working with inputs', () => {
	it('Should override the current time', () => {
		const date = new Date(2021, 3, 10).getTime() //returns a time stamp

		cy.clock(date)
		cy.log(date)
	})

	it('Should load login page', () => {
		cy.visit('http://zero.webappsecurity.com/login.html')
	})

	it('Should have the right title', () => {
		cy.title().should('include', 'Zero - Log in')
	})

	it('Should clear the cookies and storage', () => {
		/*Clear all browser cookies. Cypress automatically clears all cookies before each test to prevent state from being shared across tests. You shouldn’t need to use this command unless you’re using it to clear a specific cookie inside a single test.*/
		cy.clearCookies({ log: true })
		/*Clear data in local storage. Cypress automatically runs this command before each test to prevent state from being shared across tests. You shouldn’t need to use this command unless you’re using it to clear localStorage inside a single test. Yields localStorage object.*/
		cy.clearLocalStorage('your item', { log: true })
	})

	it('Should fill username', () => {
		cy.get('#user_login').as('username')
		cy.get('@username').clear()
		cy.get('@username').type('Some Invalid Name')
	})

	it('Should fill password', () => {
		cy.get('#user_password').as('pwd')
		cy.get('@pwd').clear()
		cy.get('@pwd').type('Some Invalid Password', { delay: 50 })
		// dont use dealy on production testing since it will be slower
	})

	it('Should mark checkbox', () => {
		cy.get('input[type=checkbox]').as('checkbox')
		cy.get('@checkbox').click()
	})

	it('Should submit login form', () => {
		cy.get('.btn-primary').contains('Sign in').click()
	})

	it('Should display error message', () => {
		cy.get('.alert-error')
			.should('be.visible')
			.and('contain', 'Login and/or password are wrong.')
	})
})
