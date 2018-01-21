describe('Home Page', () => {
  before(() => {
    cy.visit('http://localhost:3000');
  });

  it('should load without error', () => {
    cy.get('.App').should('exist');
  });
});
