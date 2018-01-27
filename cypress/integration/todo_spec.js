describe('Home Page', () => {
  before(() => {
    cy.visit('/');
  });

  it('should load without error', () => {
    cy.get('.App').should('exist');
  });
});
