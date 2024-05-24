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

it('Editing an article', () => {

  cy.assertPagesURL(`/article/`)

    // Article edit //
  cy.contains('Edit Article')
    .click();

  cy.assertPagesURL(`/editor/`)

  cy.findeByPlaceholder('Article Title')
    .clear().type(UserInfo.newArticleTitle);

  cy.findByType('button')
    .contains('Update Article')
    .click();

    // Article check //
  cy.visit(`${UserInfo.baseUrl}/profile/${UserInfo.userName}`);

  cy.findByClass('preview-link')
    .contains(UserInfo.newArticleTitle)
    .click();

  cy.assertPagesURL('/article/');
  
  cy.findByClass('banner')
    .contains(UserInfo.newArticleTitle);
  cy.findByClass('col-md-12')
    .contains(UserInfo.articleBody);
  cy.findByClass('tag-list')
    .contains(UserInfo.articleTags);
});

