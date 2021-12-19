Cypress.Commands.add('addUser', function ({name, username, password}){
    cy.request({
        url: 'http://localhost:3003/api/users',
        method: 'POST',
        body: {name, username, password}
    })
})

Cypress.Commands.add('login', function ({username, password}) {
    cy.request({
        url: 'http://localhost:3003/api/login',
        method: 'POST',
        body: {username, password}
    }).then(({body}) => {
        window.localStorage.setItem('token', body.token)
        window.localStorage.setItem('user', body.name)
        cy.visit('http://localhost:3000')
    })

})

Cypress.Commands.add('createBlog', function (blogObject){
    cy.request({
        url: 'http://localhost:3003/api/blogs',
        method: 'POST',
        body: blogObject,
        headers: {
            'Authorization': `bearer ${window.localStorage.getItem('token')}`
        }
    })
    cy.visit('http://localhost:3000')
})

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
            const blog1 = {
                title: 'Blog 1 Title',
                author: 'Blog 1 Author',
                url: 'Blog 1 URL',
                likes: 5
            }
            const blog2 = {
                title: 'Blog 2 Title',
                author: 'Blog 2 Author',
                url: 'Blog 2 URL',
                likes: 5
            }
            const blog3 = {
                title: 'Blog 3 Title',
                author: 'Blog 3 Author',
                url: 'Blog 3 URL',
                likes: 6
            }
            cy.addUser(user)
            cy.login({username: user.username, password: user.password})
            cy.createBlog(blog1)
            cy.createBlog(blog2)
            cy.createBlog(blog3)
        })

        it('A blog can be created', function () {
            cy.get('[data-testid="createNew-show"').click()
            cy.get('[data-testid="createNew-show"').parent()
              .should('have.css', 'display', 'none')
            cy.get('[data-testid="title"').type('Blog Title 2')
            cy.get('[data-testid="author"').type('Blog Author 2')
            cy.get('[data-testid="url"').type('Blog URL 2')
            cy.get('[data-testid="createNew"').click()
            cy.get('[data-testid="createNew-show"').parent()
              .should('have.css', 'display', 'block')
            cy.get('div[data-testid="static-elements"]:last')
              .should('contain','Blog Title 2')
              .should('contain','Blog Author 2')
        })

        it('A blog can be liked', function () {
            cy.get('div[data-testid="static-elements"]:last').as('staticElement')
            cy.get('div[data-testid="dynamic-elements"]:last').as('dynamicElement')
            cy.get('@dynamicElement').find('[data-testid="blog-likes"]').as('divLikes')
            cy.get('@dynamicElement').should('have.css', 'display', 'none')
            cy.get('@staticElement').find('[data-testid="toggle-details"]').click()
            cy.get('@dynamicElement').should('have.css', 'display', 'block')
            cy.get('@divLikes').invoke('text').then(text => {
                expect(Number(text)).equal(0)
                let defaultLikes = Number(text)
                cy.get('@dynamicElement').find('[data-testid="increase-likes"]').click()
                cy.get('@divLikes').contains(defaultLikes + 1)
            })
            

        })

        it('A blog can be deleted', function (){
            cy.get('div[data-testid="blog-container"]').then(blogs => {
                let blogsCount = blogs.length
                cy.get('div[data-testid="static-elements"]:last').find('[data-testid="toggle-details"]').click()
                cy.get('div[data-testid="dynamic-elements"]:last').find('[data-testid="remove-blogs"]').click()
                cy.on('window:confirm', () => true)
                cy.get('div[data-testid="blog-container"]').should('have.length', blogsCount - 1)
            })            
        })

        it.only('Blogs are rearranged in order of highest to lowest likes', function () {
            cy.get('[data-testid="blog-likes"]').then(blogs => {
                const likes = blogs.map((index, blog) => blog.likes)
                const likesSorted = likes.sort((a, b) => b - a)
                expect(likes).to.deep.eq(likesSorted)
            })
        })
    })
})