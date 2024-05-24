import '../support/commands';
import { generateUser } from "../support/generate";

describe('Positive sign up', () => {
    let user;

    before(() => {
        cy.visit('user/register');
        user = generateUser(); 
    });
  
    it('should allow to register a new user', () => {
        cy.findByPlaceholder('Username').type(user.randomUsername);
        cy.findByPlaceholder('Email').type(user.randomEmail);
        cy.findByPlaceholder('Password').type(user.password);
        cy.get('button[type="submit"]').click();

        cy.contains(user.randomUsername.toLowerCase()).should('be.visible');
    });
});
