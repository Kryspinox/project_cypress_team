import './commands';
import { generateUser } from "./generate";

describe('Positive sign in', () => {
    before(() => {

      cy.visit('/login');

      let user;
    });
  
    it('should allow to successfully login registered user', () => {

    const user = generateUser;

    cy.registerNewUser.then(user =>{

    cy.findByPlaceholer('Email').type(randomEmail);
    cy.findByPlaceholer('Email').type(password);

   cy.contains(user.username).should('be.visible');
    })

    });
});