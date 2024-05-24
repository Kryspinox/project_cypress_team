/// <reference types='cypress' />

import{ UserInfo } from '../support/userInfo.cy.js';

before (() => {

  cy.visit(`${UserInfo.baseUrl}/user/login`);
    //  Log in //
  cy.findByType('email')
    .type(UserInfo.userEmail);
  cy.findByType('password')
    .type(UserInfo.userPassword);
  cy.findByType('submit')
    .click();
  cy.contains(UserInfo.userName)
    .should('exist')
    .and('have.class', 'nav-link');
  
    cy.assertPagesURL (`${UserInfo.baseUrl}`);

    // Article create //
    cy.contains('New Article')
      .click()
      .and('have.class', 'active nav-link');
  
    cy.assertPagesURL(`/editor`);
  
    cy.findeByPlaceholder('Article Title')
     .type(UserInfo.articleTitle);
    cy.findeByPlaceholder('What\'s this article about?')
     .type(UserInfo.articleDescription);
    cy.findeByPlaceholder('Write your article (in markdown)')
     .type(UserInfo.articleBody);
    cy.findeByPlaceholder('Enter tags')
     .type(UserInfo.articleTags);
  
    cy.findByType('button')
     .contains('Publish Article')
     .click();
    cy.findByType('button')
      .contains('Publish Article')
      .click();
});

it('Delete an article', () => {

  cy.assertPagesURL(`/article/`)

  cy.contains('Delete Article')
    .click();

  cy.assertPagesURL(`${UserInfo.baseUrl}`);

  cy.findByClass('article-preview')
    .contains('No articles are here... yet.')
    .should('exist');
});
