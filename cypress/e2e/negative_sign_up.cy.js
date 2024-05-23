import './commands';
import { generateUser } from "./generate";


describe('Negative sign up', () => {

  let user;

    beforeEach(() => {

      cy.visit('/register');

      const user = generateUser;

      cy.registerNewUser();
    });

it('should not register with an empty password field', () => {

  cy.findByPlaceholder('username').type(user.randomUsername);
  cy.findByPlaceholder('email').type(user.randomEmail);

//
  });

  it('should not register with invalid email', () => {


    cy.findByPlaceholder('username').type(user.randomUsername);
    cy.findByPlaceholder('email').type(user.invalidEmail);
    cy.findByPlaceholder('password').type(user.password);

    //
  });

  it('should not register with taken email', () => {
   cy.registerNewUser().then(user => {

    cy.findByPlaceholder('username').type(user.randomUsername);
    cy.findByPlaceholder('email').type(user.randomEmail);
    cy.findByPlaceholder('password').type(user.password);

    //
   });
  });

  it('should not register with short password', () => {

    cy.findByPlaceholder('username').type(user.randomUsername);
    cy.findByPlaceholder('email').type(user.randomEmail);
    cy.findByPlaceholder('password').type(user.shortPassword);

    //
  
  });

    it('should not register with an empty username field', () => {

      cy.findByPlaceholder('email').type(user.email);
      cy.findByPlaceholder('password').type(user.password);

     //
      });
    
      it('should not register with an empty email field', () => {
    
        cy.findByPlaceholder('username').type(user.randomUsername);
        cy.findByPlaceholder('password').type(user.password);

        //
      });
    });