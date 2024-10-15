// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })


/* Login functions */
Cypress.Commands.add('login', () => {
    cy.fixture("users.json").then((users) => {
        const user = users[0];
        cy.get("#login2").click();
        cy.wait(1000);
        cy.get('#loginusername').type(user.username);
        cy.wait(1000);
        cy.get('#loginpassword').type(user.password);
        cy.wait(1000);
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click({ force: true });
        cy.get('#nameofuser', { timeout: 20000 }).should('have.text', 'Welcome admin');
    })
})

Cypress.Commands.add('wrongLogin', () => {
    cy.fixture("users.json").then((users) => {
        const user = users[1];
        cy.get("#login2").click();
        cy.wait(1000);
        cy.get('#loginusername').type(user.username);
        cy.wait(1000);
        cy.get('#loginpassword').type(user.wrongPassword);
        cy.wait(1000);
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click({ force: true });
        cy.wait(3000);
    })
})

Cypress.Commands.add('assertAlert', (expectedText: string) => {
    cy.on('window:alert', (txt: string) => {
        expect(txt).to.equal(expectedText);
    });
});

/* Category functions */

Cypress.Commands.add('verifyCategories', (expectedCategories: string[]) => {
    cy.get('.list-group-item').each((element, index) => {
        expect(element.text()).to.equal(expectedCategories[index]);
    });

    cy.log(`The total number of categories found was: ${expectedCategories.length - 1}`);
});


/* Purchase functions */

Cypress.Commands.add('addProductToCart', (productName: string) => {
    cy.contains(productName).click();
    cy.wait(2000);
    cy.contains('Add to cart').click();
});

Cypress.Commands.add('openCart', () => {
    cy.get('#cartur').click();
});

Cypress.Commands.add('placeOrder', () => {
    cy.contains('Place Order').click()
});

Cypress.Commands.add('fillCheckoutFormSuccessful', () => {
    cy.fixture("users.json").then((users) => {
        const user = users[0];
        cy.wait(2000);
        cy.get('#name').type(user.name)
        cy.wait(2000);
        cy.get('#country').type(user.country);
        cy.wait(2000);
        cy.get('#city').type(user.city);
        cy.wait(2000);
        cy.get('#card').type(user.creditCard);
        cy.get('#month').type(user.month);
        cy.get('#year').type(user.year);
    });

});

Cypress.Commands.add('fillCheckoutFormUnsuccessful', () => {
    cy.fixture("users.json").then((users) => {
        const user = users[1];
        cy.wait(2000);
        cy.get('#name').type(user.name)
        cy.wait(2000);
        cy.get('#country').type(user.country);
        cy.wait(2000);
        cy.get('#city').type(user.city);
        cy.wait(2000);
        cy.get('#month').type(user.month);
        cy.get('#year').type(user.year);
    });

});

Cypress.Commands.add('submitPurchase',
    () => {
        cy.contains('Purchase').click();
        cy.wait(2000);
    });


