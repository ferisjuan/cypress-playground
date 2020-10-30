describe('Write data to JSON / Text file', () => {
	it('SHould write data into JSON', () => {
		cy.writeFile('log.json', { name: 'Mike', age: 25 })
	})

	it('Should write data to the text file', () => {
		cy.writeFile('log.txt', 'Hello Juan!')
	})

	it('Should read and verify data from a json file', () => {
		cy.readFile('log.json').its('age').should('eq', 25)
	})

	it('Should read and verify data from a test file', () => {
		cy.readFile('log.txt').should('eq', 'Hello Juan!')
	})

	it('Should read and verify browser document content', () => {
		cy.visit('https://www.example.com')
		cy.wait(2000)

		cy.document().its('contentType').should('eq', 'text/html')

		cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
	})
})
