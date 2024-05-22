/// <reference types='cypress' />

const { UserInfo } = require('../support/userInfo.cy.js');

const {userPassword, userEmail, articleBody, articleDescription, articleTitle, articleTags} = UserInfo();

it('should log in and create a new article', () => {
  cy.visit('https://conduit.mate.academy/user/login');

  cy.findByType('email').type(userEmail);
  cy.findByType('password').type(userPassword);
  cy.findByType('submit').click();

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

  cy.contains('Publish Article').click();
  cy.contains('Publish Article').click();

  cy.assertPagesURL('/article/');
  
  cy.contains(articleTitle);
  cy.contains(articleDescription);
  cy.contains(articleBody);
});
