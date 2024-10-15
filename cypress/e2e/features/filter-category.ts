describe('Check categories', () => {

  beforeEach(() => {
    cy.visit(Cypress.env('urlTest'))
  })


  it('Categories found correctly', () => {
    const expectedCategories = ['CATEGORIES', 'Phones', 'Laptops', 'Monitors'];

    cy.verifyCategories(expectedCategories);
  });
});