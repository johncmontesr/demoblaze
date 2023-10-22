describe('Check categories', () => {
    
    beforeEach(() => {
        cy.visit(Cypress.env('urlTest'))
      })


it("Categories found correctly", () => {
    const categories = cy.get('.list-group-item')

    const expectedCat = ['CATEGORIES', 'Phones', 'Laptops', 'Monitors']

    categories.each((element, index) => {
      expect(element.text()).to.equal(expectedCat[index])
    });

    cy.log(`The total number of categories found was: ${expectedCat.length - 1}`)
  })

})


