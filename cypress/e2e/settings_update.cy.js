/// <reference types='cypress' />

describe('Updating', () => {
    const bio = 'Short bio';
    const username = 'tester100';
    const loginMail = 'tester100@wp.pl'
    const loginPassword = 'tester100'

    let updated;
    
  
    beforeEach(() => {
      cy.visit('user/login');
      cy.get('[placeholder="Email"]').type(loginMail);
      cy.get('[placeholder="Password"]').type(loginPassword);
      cy.contains('.btn', 'Sign in').click

      cy.task('generateUpdateData').then((generateUpdateData) => {
        updated = generateUpdateData;
      });
      
    });
  
    it('should updating bio', () => {
      cy.visit('/settings');
      cy.get('[placeholder="Short bio about you"]').click({force: true}).type(updated.newBio);
      
      cy.get('.btn').click;

      cy.visit(`/profile/${username}`);
      cy.get('.col-xs-12 > p').contains('sport');
      
    });

    it('should updating username', () => {
      cy.visit('/settings');
      cy.get('[placeholder="Username"]').focus().type(updated.newUsername);
      cy.get('.btn').click;

      cy.visit(`/profile/${username}`);
      cy.get('h4').should('contain', username);
      
    });

    it('should updating email', () => {
      cy.visit('/settings');
      cy.get('[placeholder="Email"]')
        .focus()
        .type(updated.newEmail);
      cy.get('.btn').click;
      
    });

    it('should updating password', () => {
      cy.visit('/settings');
      cy.get('[placeholder="New Password"]').focus().type(updated.newPassword);
      cy.get('.btn').click;
    });

});