//  Classes should go into folders

class BasePage {
	static loadHomePage() {
		cy.visit('https://devexpress.github.io/testcafe/example/')
	}

	static wait(number) {
		cy.wait(number)
	}
}

class HomePage extends BasePage {
	static scrollToBottom() {
		cy.get('#submit-button').scrollIntoView()
	}

	static scrollToTop() {
		cy.get('header').scrollIntoView()
	}
}

describe('Abstraction with Classes', () => {
	before(function () {
		// runs before all tests inside describe
		// setup test data or test context
		// speed or reset the database
		HomePage.loadHomePage()
	})

	after(function () {
		// runs after alltests inside describe
		// for test clean up
		// clean cookies or localstorage
	})

	beforeEach(function () {
		// runs before each it block in the describe
	})

	afterEach(function () {
		// runs after each it block in the describe
	})

	it.skip('1rst it', () => {
		HomePage.wait(2000)
		HomePage.scrollToBottom()
		HomePage.wait(3000)
		HomePage.scrollToTop()
	})

	it('1rst it', () => {
		HomePage.wait(2000)
		HomePage.scrollToBottom()
		HomePage.wait(3000)
		HomePage.scrollToTop()
	})

	it.only('2nd it', () => {
		HomePage.wait(2000)
		HomePage.scrollToBottom()
		HomePage.wait(3000)
		HomePage.scrollToTop()
	})
})
