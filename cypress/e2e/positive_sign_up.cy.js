import '../support/commands';
import { generateUser } from "../support/generate";

describe('Positive sign up', () => {
    before(() => {
      cy.visit('/register');
      let user;
    });
  
    it('should allow to register a new user', () => {
      const user = generateUser;

    cy.registerNewUser().then(user => {
    
    cy.findByPlaceholder('username').type(user.randomUsername);
    cy.findByPlaceholder('email').type(user.randomEmail);
    cy.findByPlaceholder('password').type(user.password);

    cy.contains(user.username).should('be.visible');
    });
    });
});