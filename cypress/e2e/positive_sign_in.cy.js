import '../support/commands';
import { generateUser } from "../support/generate";

describe('Positive sign in', () => {
    before(() => {

      cy.visit('/login');

      let user;
    });
  
    it('should allow to successfully login registered user', () => {

    const user = generateUser();

    cy.registerNewUser.then(user =>{

      cy.findByPlaceholder('Email').type(user.randomEmail);
      cy.findByPlaceholder('Password').type(user.password);

   cy.contains(user.username).should('be.visible');
    })

    });
});