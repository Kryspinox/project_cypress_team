Cypress.Commands.add('findeByPlaceholder', (placeholder) => {
    cy.get(`[placeholder="${placeholder}"]`)
  });

Cypress.Commands.add('findByType', (elementType) => {
    cy.get(`[type="${elementType}"]`);
  });

Cypress.Commands.add('findByClass', (elementClass) => {
    cy.get(`.${elementClass}`);
  });

Cypress.Commands.add('assertPagesURL', (elementURL) => {
    cy.url().should('include', `${elementURL}`);
  });
