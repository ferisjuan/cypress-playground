describe('Browser actions 2', () => {
	it('Should load books website', () => {
		cy.visit('https://books.toscrape.com/index.html', { timeout: 10000 })
		cy.url().should('include', 'index.html')
		cy.log('Before Reload')
		cy.reload()
		cy.log('After Reload')
	})

	it('Should click on Travel category', () => {
		cy.get('a').contains('Travel').click()

		cy.get('h1').contains('Travel')
	})

	it('Should display correct number of books', () => {
		cy.get('.product_pod').its('length').should('eq', 11)
	})

	it('Should click on Poetry category', () => {
		cy.get('a').contains('Poetry').click()
	})

	it('Should click on Olio book detail', () => {
		cy.get('a').contains('Olio').click()
	})

	it('Should be priced £23.88', () => {
		cy.get('.price_color').contains('£23.88')
	})
})
