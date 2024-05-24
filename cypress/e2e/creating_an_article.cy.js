/// <reference types='cypress' />

import{ UserInfo } from '../support/userInfo.cy.js';

before(() => {
  
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
});

it('Create an article', () => {

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

    // Article check //
  cy.assertPagesURL('/article/');
  
  cy.findByClass('banner')
    .contains(UserInfo.articleTitle);
  cy.findByClass('col-md-12')
    .contains(UserInfo.articleBody);
  cy.findByClass('tag-list')
    .contains(UserInfo.articleTags);
});
