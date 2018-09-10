const testSuccessMessage = () => {
  cy.get('.success').should('be.visible');
  // message disappears, but we should select it in the DOM again
  // because React re-renders everything, so the previous DOM element
  // is no longer there!
  cy.get('.success').should('not.exist');
};

describe('Todo App Tests', function() {
  beforeEach(function() {
    cy.fixture('todos').then(({todos}) => {
      cy
        .server()
        .route({
          method: 'GET',
          url: '/api/todos',
          response: todos
        })
        .route({
          method: 'POST',
          url: '/api/todos',
          status: 201,
          response: {}
        })
        .route({
          method: 'DELETE',
          url: '/api/todos/*',
          status: 200,
          response: {}
        })
        .route({
          method: 'OPTIONS',
          url: '/api/todos/*',
          status: 204,
          response: {}
        })
        .route({
          method: 'PUT',
          url: '/api/todos/*',
          status: 200,
          response: {}
        });
    });

    cy.visit('/');

    cy.get('div.Todo-List > ul > li').as('list');
  });

  it('Has the expected starting state', function() {
    cy
      .get('@list')
      .should('have.length', 3)
      .get('div.Todo-List > ul > li:nth-child(1) > input[type="checkbox"]')
      .should('be.checked');
  });

  it('Toggles a todo to incomplete', function() {
    cy
      .get('div.Todo-List > ul > li:nth-child(1) > input[type="checkbox"]')
      .should('be.checked')
      .click()
      .should('not.be.checked');
    testSuccessMessage();
  });

  it('Toggles a todo to complete', function() {
    cy
      .get('div.Todo-List > ul > li:nth-child(2) > input[type="checkbox"]')
      .should('not.be.checked')
      .click()
      .should('be.checked');
    testSuccessMessage();
  });

  it('Filters to Active Todos via Click', function() {
    cy
      .contains('Active')
      .click()
      .get('@list')
      .should('have.length', 2);
  });

  it('Filters to Active Todos via URL', function() {
    cy
      .visit('/active')
      .get('@list')
      .should('have.length', 2);
  });

  it('Filters to Complete Todos via Click', function() {
    cy
      .contains('Complete')
      .click()
      .get('@list')
      .should('have.length', 1);
  });

  it('Filters to Complete Todos via URL', function() {
    cy
      .visit('/complete')
      .get('@list')
      .should('have.length', 1);
  });

  it('Shows All Todos via Click', function() {
    cy
      .contains('All')
      .click()
      .get('@list')
      .should('have.length', 3);
  });

  it('Creates a New Todo', function() {
    cy
      .get('div.Todo-App > form > input[type="text"]')
      .type('Cypress Test Todo')
      .type('{enter}')
      .get('@list')
      .should('have.length', 4);
  });

  it('shows a success message when added to server', function() {
    cy
      .get('div.Todo-App > form > input[type="text"]')
      .type('Cypress Test Todo')
      .type('{enter}') // Separated out to make it obvious
    testSuccessMessage();
  });

  it('deletes a todo', function() {
    cy
      .get('div.Todo-List > ul > li:last-child')
      .find('span > a')
      .click({force: true}) // force - because element isn't visible
    testSuccessMessage();
  });
});