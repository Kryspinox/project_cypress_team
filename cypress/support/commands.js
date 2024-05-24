// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { faker } from "@faker-js/faker";
import { generateUser } from "./generate";

Cypress.Commands.add('findByPlaceholder', (placeholder) => {
    cy.get(`[placeholder="${placeholder}"]`)
  });
  
  Cypress.Commands.add('registerNewUser', () => {
    const user = generateUser();

    return cy.request({
        method: 'POST',
        url: 'https://conduit.mate.academy/api/users',
        body: {
            "user": {
                "username": user.randomUsername,
                "email": user.randomEmail.toLocaleLowerCase(),
                "password": user.password
            }
        }
    }).then((response) => {
        expect(response.status).to.eq(200); 
        expect(response.body.user).to.have.property('email', user.randomEmail.toLowerCase());
        return user;
    });
});

Cypress.Commands.add('fillUserForm', (user) => {
  cy.findByPlaceholder('username').type(user.randomUsername);
  cy.findByPlaceholder('email').type(user.randomEmail);
  cy.findByPlaceholder('password').type(user.password);
  cy.get('button[type="submit"]').click();
});


