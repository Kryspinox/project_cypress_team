/// <reference types='cypress' />

const { UserInfo } = require('../support/userInfo.cy.js');

const {userPassword, userEmail, articleBody, articleDescription, articleTitle, articleTags} = UserInfo();

before (() => {

  cy.visit('https://conduit.mate.academy/user/login');
    //  Log in //
  cy.findByType('email')
    .type(userEmail);
  cy.findByType('password')
    .type(userPassword);
  cy.findByType('submit')
    .click();
    // Article create //
  cy.contains('New Article')
   .click();

  cy.findeByPlaceholder('Article Title')
   .type(articleTitle);
  cy.findeByPlaceholder('What\'s this article about?')
   .type(articleDescription);
  cy.findeByPlaceholder('Write your article (in markdown)')
   .type(articleBody);
  cy.findeByPlaceholder('Enter tags')
   .type(articleTags);

  cy.contains('Publish Article')
    .click();
  cy.contains('Publish Article')
    .click();
});

it('Delete an article', () => {
  cy.contains('Delete Article')
    .click();
  cy.assertPagesURL('/article/');
  cy.contains('No articles are here... yet.')
});
