import '../support/commands';
import { generateUser } from "../support/generate";

describe('Negative sign in', () => {

  let user; 

  beforeEach(() => {
    cy.visit('/user/login');
    user = generateUser();
  });

  it('should not log in with non-registered email', () => {
    cy.findByPlaceholder('Email').type(user.randomEmail);
    cy.findByPlaceholder('Password').type(user.password);
    cy.get('button[type="submit"]').click();

    cy.get('.error-messages')
    .should('contain', "email or password")
    .and('contain', "is invalid");
  });

  it('should not log in with wrong password', () => {
    cy.registerNewUser().then((registeredUser) => {
      cy.findByPlaceholder('Email').type(registeredUser.randomEmail);
      cy.findByPlaceholder('Password').type('wrongPassword');
      cy.get('button[type="submit"]').click();

      cy.get('.error-messages')
      .should('contain', "email or password")
      .and('contain', "is invalid");
    });
  });

  it('should not log in with empty email field', () => {
    cy.findByPlaceholder('Password').type(user.password);
    cy.get('button[type="submit"]').click();

    cy.get('.error-messages')
    .should('contain', "email")
    .and('contain', "can't be blank");
  });

  it('should not log in with empty password field', () => {
    cy.findByPlaceholder('Email').type(user.randomEmail);
    cy.get('button[type="submit"]').click();

    cy.get('.error-messages')
    .should('contain', "password")
    .and('contain', "can't be blank");
  });

  it('should not log in with empty fields', () => {
    cy.get('button[type="submit"]').click();

    cy.get('.error-messages')
    .should('contain', "email")
    .and('contain', "can't be blank");
  });

});
