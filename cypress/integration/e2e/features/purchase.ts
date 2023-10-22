describe('Purchase', () => {
    
    beforeEach(() => {
        cy.visit(Cypress.env('urlTest'))
      })

    
    it('Successful purchase', () => {
        cy.contains('Samsung galaxy s6', { timeout: 10000 }).click()
        cy.contains('Add to cart', { timeout: 10000 }).click()
        cy.get('#cartur').click()
        cy.contains('Place Order').click()
        cy.get('#name').type(Cypress.env('name'))
        cy.get('#country').type(Cypress.env('country'))
        cy.get('#city').type(Cypress.env('city'))
        cy.get('#card').type(Cypress.env('creditCard'))
        cy.get('#month').type(Cypress.env('month'))
        cy.get('#year').type(Cypress.env('year'))
        cy.contains('Purchase', { timeout: 5000 }).click()
        cy.contains('Thank you for your purchase!').should('contain.text', 'Thank you for your purchase!')      
    })

    it('Unsuccessful purchase - No credit card information', () => {
        cy.contains('Samsung galaxy s6', { timeout: 10000 }).click()
        cy.contains('Add to cart', { timeout: 10000 }).click()
        cy.get('#cartur').click()
        cy.contains('Place Order').click()
        cy.get('#name').type(Cypress.env('name'))
        cy.get('#country').type(Cypress.env('country'))
        cy.get('#city').type(Cypress.env('city'))
        cy.get('#year').type(Cypress.env('year'))
        cy.contains('Purchase', { timeout: 5000 }).click()
    })
})