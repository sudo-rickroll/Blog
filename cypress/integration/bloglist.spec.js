describe('Blog app', function (){
    beforeEach(function () {
        cy.request('POST', 'http://localhost:3003/api/testing/reset')
        cy.visit('http://localhost:3000')
    })

    it('login form is shown', function () {
        cy.contains('login to the application')
    })


    describe('Login', function (){
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
        
        it('succeeds with correct credentials', function (){
            cy.get('[data-testid="username-txt"]').type('anonymous')
            cy.get('[data-testid="password-txt"]').type('ansdfgg')
            cy.get('[data-testid="submit-cred"]').click()
            cy.contains('Anonymous has logged in')
        })

        it('fails with wrong credentials', function (){
            cy.get('[data-testid="username-txt"]').type('anonymous')
            cy.get('[data-testid="submit-cred"]').click()
            cy.get('[data-testid="text-notification"]').contains(`Invalid username or password`)
        })
    })

    describe('When logged in', function () {
        beforeEach(function(){
            cy.request('POST', 'http://localhost:3003/api/testing/reset')
            const user = {
                name: 'Anonymous',
                username: 'anonymous',
                password: 'ansdfgg'
            }
            cy.request('POST', 'http://localhost:3003/api/users', user)
            cy.visit('http://localhost:3000')
            cy.get('[data-testid="username-txt"]').type(`${user.username}`)
            cy.get('[data-testid="password-txt"]').type(`${user.password}`)
            cy.get('[data-testid="submit-cred"]').click()
        })

        it.only('A blog can be created', function () {
            cy.get('[data-testid="createNew-show"').click()
            cy.get('[data-testid="createNew-show"').parent()
              .should('have.css', 'display', 'none')
            cy.get('[data-testid="title"').type('Blog Title')
            cy.get('[data-testid="author"').type('Blog Author')
            cy.get('[data-testid="url"').type('Blog URL')
            cy.get('[data-testid="createNew"').click()
            cy.get('[data-testid="createNew-show"').parent()
              .should('have.css', 'display', 'block')
            cy.get('div[data-testid="static-elements"]:last')
              .should('contain','Blog Title')
              .should('contain','Blog Author')
        })
    })
})