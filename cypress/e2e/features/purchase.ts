describe('Purchase', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('urlTest'))
    })

    it('Successful purchase', () => {
        cy.addProductToCart('Samsung galaxy s6');
        cy.openCart();
        cy.placeOrder();
        cy.fillCheckoutFormSuccessful();
        cy.submitPurchase();
        cy.contains('Thank you for your purchase!').should('contain.text', 'Thank you for your purchase!');
    });


    it('Unsuccessful purchase - No credit card information', () => {
        cy.addProductToCart('Sony xperia z5');
        cy.openCart();
        cy.placeOrder();
        cy.fillCheckoutFormUnsuccessful();
        cy.submitPurchase();
        cy.assertAlert('Please fill out Name and Creditcard');
    })

});
