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

  cy.contains("Password can't be blank").should('be.visible');
  });

  it('should not register with invalid email', () => {


    cy.findByPlaceholder('username').type(user.randomUsername);
    cy.findByPlaceholder('email').type(user.invalidEmail);
    cy.findByPlaceholder('password').type(user.password);

    cy.url().should('eq', `${Cypress.config('baseUrl')}user/register`);
  });

  it('should not register with taken email', () => {
   cy.registerNewUser().then(user => {

    cy.findByPlaceholder('username').type(user.randomUsername);
    cy.findByPlaceholder('email').type(user.randomEmail);
    cy.findByPlaceholder('password').type(user.password);

    cy.contains("This email is taken.").should('be.visible');
   });
  });

  it('should not register with short password', () => {

    cy.findByPlaceholder('username').type(user.randomUsername);
    cy.findByPlaceholder('email').type(user.randomEmail);
    cy.findByPlaceholder('password').type(user.shortPassword);

  // BUG
  });

    it('should not register with an empty username field', () => {

      cy.findByPlaceholder('email').type(user.email);
      cy.findByPlaceholder('password').type(user.password);

      cy.contains("Username must start with a letter, have no spaces, and be 3 - 40 characters.")
      .should('be.visible');
      });
    
      it('should not register with an empty email field', () => {
    
        cy.findByPlaceholder('username').type(user.randomUsername);
        cy.findByPlaceholder('password').type(user.password);

        cy.contains("This email does not seem valid.").should('be.visible');
      });
    });
    