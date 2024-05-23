/// <reference types='cypress' />

const { UserInfo } = require('../support/userInfo.cy.js');

const {userEmail2, userPassword2, userName} = UserInfo();

before (() => {

    cy.visit('https://conduit.mate.academy/user/login')
      //  Log in //
    cy.findByType('email')
      .type(userEmail2);
    cy.findByType('password')
      .type(userPassword2);
    cy.findByType('submit')
      .click();
});

it('Follow and unfollow user', () => {
      // Follow user //
    cy.visit(`https://conduit.mate.academy/profile/${userName}`);

    cy.contains(`Follow ${userName}`)
      .click();

    cy.visit(`https://conduit.mate.academy/profile/${userName}`);
      // Follow user //
    cy.contains(`Unfollow ${userName}`)
      .click();
    
    cy.contains(`Follow ${userName}`)
      .shadow('exist');
});
