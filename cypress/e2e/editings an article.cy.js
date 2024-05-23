/// <reference types='cypress' />

const { UserInfo } = require('../support/userInfo.cy.js');

const {userName, userPassword, userEmail, articleBody, articleDescription, articleTitle, articleTags, newArticleTitle} = UserInfo();

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

it('Editing an article', () => {
    // Article edit //
  cy.contains('Edit Article')
    .click();

  cy.findeByPlaceholder('Article Title')
    .clear().type(newArticleTitle);

  cy.contains('Update Article')
    .click();

    // Article check //
  cy.visit(`https://conduit.mate.academy/profile/${userName}`);

  cy.contains(newArticleTitle)
    .click();

  cy.assertPagesURL('/article/');
  
  cy.contains(newArticleTitle);
  cy.contains(articleDescription);
  cy.contains(articleBody);
});

