describe('Positive sign up', () => {
    before(() => {
      cy.visit('/');
    });
  
    it('should allow to register a new user', () => {
    cy.registerNewUser().then(user => {
    
    cy.findByPlaceholder('username').type(user.randomUsername);
    cy.findByPlaceholder('email').type(user.randomEmail);
    cy.findByPlaceholder('password').type(user.password);
    });
    });
});