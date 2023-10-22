describe('Login', () => {
    
    beforeEach(() => {
        cy.visit(Cypress.env('urlTest'))
      })

    
    it('Successful Login', () => {
        cy.get("#login2").click()
        cy.get('#loginusername').type(Cypress.env('username'))
        cy.get('#loginpassword').type(Cypress.env('password'))
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click({ force: true })
        cy.get('#nameofuser', { timeout: 20000 }).should('have.text', 'Welcome admin')
    })

    it('Unsuccessful Login', () => {
        cy.get("#login2").click()
        cy.get('#loginusername').type('user')
        cy.get('#loginpassword').type('pass')
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click({ force: true })
        cy.on('window:alert',(txt)=>{
            cy.assert(txt).to.equal('Wrong password')
        })        
    })
})