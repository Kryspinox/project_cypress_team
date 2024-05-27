import '../support/commands';
import { generateUser } from "../support/generate";


describe('Negative sign up', () => {

  let user;

    beforeEach(() => {

      cy.visit('/user/register');

      user = generateUser();

      cy.registerNewUser();
    });

it('should not register with an empty password field', () => {

  cy.findByPlaceholder('Username').type(user.randomUsername);
  cy.findByPlaceholder('Email').type(user.randomEmail);
  cy.get('button[type="submit"]').click();

  cy.get('.error-messages')
  .should('contain', "password")
  .and('contain', "can't be blank");
  });

  it('should not register with invalid email', () => {


    cy.findByPlaceholder('Username').type(user.randomUsername);
    cy.findByPlaceholder('Email').type(user.invalidEmail);
    cy.findByPlaceholder('Password').type(user.password);

    cy.url().should('eq', `${Cypress.config('baseUrl')}user/register`);
  });

  it('should not register with taken email', () => {
    cy.registerNewUser().then(registeredUser => {
      cy.findByPlaceholder('Username').type(registeredUser.randomUsername);
      cy.findByPlaceholder('Email').type(registeredUser.randomEmail);
      cy.findByPlaceholder('Password').type(registeredUser.password);
      cy.get('button[type="submit"]').click();
    

      cy.get('.error-messages')
      .should('contain', "email")
      .and('contain', "This email is taken");
   });
  });

  it('should not register with short password', () => {

    cy.findByPlaceholder('Username').type(user.randomUsername);
    cy.findByPlaceholder('Email').type(user.randomEmail);
    cy.findByPlaceholder('Password').type(user.shortPassword);
    cy.get('button[type="submit"]').click();

    cy.url().should('eq', `${Cypress.config('baseUrl')}user/register`);

  // BUG
  });

    it('should not register with an empty username field', () => {

      cy.findByPlaceholder('Email').type(user.randomEmail);
      cy.findByPlaceholder('Password').type(user.password);
      cy.get('button[type="submit"]').click();

      cy.contains("Username").should('be.visible');
      cy.contains("must start with a letter, have no spaces, and be 3 - 40 characters.")
      .should('be.visible');
      });
    
      it('should not register with an empty email field', () => {
    
        cy.findByPlaceholder('Username').type(user.randomUsername);
        cy.findByPlaceholder('Password').type(user.password);
        cy.get('button[type="submit"]').click();

        cy.contains("This email does not seem valid.").should('be.visible');
      });
    });
    