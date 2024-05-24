import '../support/commands';
import { generateUser } from "../support/generate";

describe('Positive sign in', () => {
    before(() => {

      cy.visit('/user/login');

      let user;
    });
  
    it('should allow to successfully login registered user', () => {

    const user = generateUser();

    cy.registerNewUser().then(registeredUser => {
      cy.visit('/user/login');

      cy.findByPlaceholder('Email').type(registeredUser.randomEmail.toLowerCase());
      cy.findByPlaceholder('Password').type(registeredUser.password);
      cy.get('button[type="submit"]').click();

      cy.contains(registeredUser.randomUsername.toLowerCase()).should('be.visible');
    })

    });
});