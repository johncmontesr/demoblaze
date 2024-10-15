/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable<Subject = any> {
        login(): Chainable<any>;
        wrongLogin(): Chainable<any>;
        assertAlert(expectedText: string): Chainable<any>;
        verifyCategories(expectedCategories: string[]): Chainable<any>;
        addProductToCart(productName: string): Chainable<any>;
        openCart(): Chainable<any>;
        placeOrder(): Chainable<any>;
        fillCheckoutFormSuccessful(): Chainable<any>;
        fillCheckoutFormUnsuccessful(): Chainable<any>;
        submitPurchase(): Chainable<any>;
    }
  }