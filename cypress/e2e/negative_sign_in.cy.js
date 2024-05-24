import '../support/commands';
import { generateUser } from "../support/generate";

describe('Negative sign in', () => {

  let user; 

  beforeEach(() => {
    cy.visit('/login');
    cy.task('generateUser').then((generatedUser) => {
      user = generatedUser;
    });
  });

  it('should not log in with non-registered email', () => {
    cy.registerNewUser().then(() => {
      cy.findByPlaceholder('Email').type(user.randomEmail);
      cy.findByPlaceholder('Password').type(user.password);
      cy.get('button[type="submit"]').click();

      cy.contains("email or password is invalid").should("be.visible");
    });
  });

  it('should not log in with wrong password', () => {
    cy.registerNewUser().then((registeredUser) => {
      cy.findByPlaceholder('Email').type(registeredUser.randomEmail);
      cy.findByPlaceholder('Password').type('wrongPassword');
      cy.get('button[type="submit"]').click();

      cy.contains("email or password is invalid").should("be.visible");
    });
  });

  it('should not log in with empty email field', () => {
    cy.registerNewUser().then(() => {
      cy.findByPlaceholder('Password').type(user.password);
      cy.get('button[type="submit"]').click();

      cy.contains("email can't be blank").should("be.visible");
    });
  });

  it('should not log in with empty password field', () => {
    cy.registerNewUser().then(() => {
      cy.findByPlaceholder('Email').type(user.randomEmail);
      cy.get('button[type="submit"]').click();

      cy.contains("password can't be blank").should("be.visible");
    });
  });

  it('should not log in with empty fields', () => {
    cy.registerNewUser().then(() => {
      cy.get('button[type="submit"]').click();

      cy.contains("email can't be blank").should("be.visible");
    });
  });

});
