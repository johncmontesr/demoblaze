describe("Login", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("urlTest"));
  });

  it("Successful Login", () => {
    cy.login();
  });

  it("Unsuccessful Login", () => {
    cy.wrongLogin();
    cy.assertAlert('Wrong password');
  });
  
});
