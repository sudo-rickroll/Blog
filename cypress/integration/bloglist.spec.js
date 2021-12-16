describe('Blog app', () => {
    beforeEach(function () {
        cy.request('POST', 'http://localhost:3003/api/testing/reset')
        cy.visit('http://localhost:3000')
    })

    it('login form is shown', function () {
        cy.contains('login to the application')
    })
})

describe('Login', () => {
    beforeEach(function () {
        cy.request('POST', 'http://localhost:3003/api/testing/reset')
        const user = {
            name: 'Anonymous',
            username: 'anonymous',
            password: 'ansdfgg'
        }
        cy.request('POST', 'http://localhost:3003/api/users', user)
        cy.visit('http://localhost:3000')
    })
    
    it('Successful Login', function (){
        cy.get('[data-testid="username-txt"]').type('anonymous')
        cy.get('[data-testid="password-txt"]').type('ansdfgg')
        cy.get('[data-testid="submit-cred"]').click()
        cy.contains('Anonymous has logged in')
    })

    it('Unsuccessful Login', function (){
        cy.get('[data-testid="username-txt"]').type('anonymous')
        cy.get('[data-testid="submit-cred"]').click()
        cy.get('[data-testid="text-notification"]').contains(`Invalid username or password`)
    })
})