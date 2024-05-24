import './commands';
import { generateUser } from "./generate";

describe('Negative sign in', () => {

  let user; 

    beforeEach(() => {
      cy.visit('/login');
      beforeEach(() => {
        cy.task('generateUser').then((generateUser) => {

          user = generateUser;

        });
    });

it('should not log in with non registered email', () => {
  cy.registerNewUser.then(user =>{

    cy.findByPlaceholer('Email').type(user.nonRegisteredEmail);
    cy.findByPlaceholer('Password').type(user.password);
    cy.submitButton("Sign in");

    cy.contains("email or password: is invalid").should("be visible");

  });
});

  it('should not log in with wrong password', () => {
    cy.registerNewUser.then(user =>{
 
    cy.findByPlaceholer('Email').type(user.randomEmail);
    cy.findByPlaceholer('Password').type(user.wrongPassword);
    cy.submitButton("Sign in");   

    cy.contains("email or password: is invalid").should("be visible");

  });
});

  it('should not log in with empty email field', () => {
    cy.registerNewUser.then(user =>{
 
      cy.findByPlaceholer('Password').type(user.wrongPassword);
      cy.submitButton("Sign in");

      cy.contains("email: can't be blank").should("be visible");
    });
  });

  it('should not log in with empty password field', () => {
cy.registerNewUser.then(user =>{
 
      cy.findByPlaceholer('Email').type(user.randomEmail);
      cy.submitButton("Sign in");

      cy.contains("password: can't be blank").should("be visible");
  });
});

  it('should not log in with empty fields', () => {
    cy.registerNewUser.then(user =>{
 
        cy.findByPlaceholer('Email').type(user.randomEmail);
        cy.findByPlaceholer('Password').type(user.wrongPassword);
        cy.submitButton("Sign in");
  
        cy.contains("email: can't be blank").should("be visible");
 
  });  
});

});
});