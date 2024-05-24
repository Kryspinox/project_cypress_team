/// <reference types='cypress' />

import{ UserInfo } from '../support/userInfo.cy.js';

before (() => {
  
  cy.visit(`${UserInfo.baseUrl}/user/login`);
    //  Log in //
  cy.findByType('email')
    .type(UserInfo.anotherUserEmail);
  cy.findByType('password')
    .type(UserInfo.anotherUserPassword);
  cy.findByType('submit')
    .click();
  cy.contains(UserInfo.anotherUserName)
    .should('exist')
    .and('have.class', 'nav-link');
});

it('Follow and unfollow user', () => {
      // Follow user //
    cy.visit(`https://conduit.mate.academy/profile/${UserInfo.userName}`);

    cy.contains(`Follow ${UserInfo.userName}`)
      .should('exist')
      .click();

    cy.visit(`https://conduit.mate.academy/profile/${UserInfo.userName}`);
      // Unfollow user //
    cy.contains(`Unfollow ${UserInfo.userName}`)
      .should('exist')
      .click();

    cy.assertPagesURL(`/profile/${UserInfo.userName}`)
    
    cy.contains(`Follow ${UserInfo.userName}`)
      .should('exist');
});
