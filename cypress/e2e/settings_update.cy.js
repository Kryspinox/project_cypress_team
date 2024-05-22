/// <reference types='cypress' />

describe('Updating', () => {
    const password = 'tester100';
    const mail = 'tester100@wp.pl';
    const bio = 'Short bio';
    const username = 'tester100';
    const updatedUsername = username + 200;
    const newPassword = 'tester200'
  
    beforeEach(() => {
      cy.visit('user/login');
      cy.get('[placeholder="Email"]').type(mail);
      cy.get('[placeholder="Password"]').type(password);
      cy.get('.btn').click
      
    });
  
    it('should updating bio', () => {
      cy.visit('/settings');
      cy.get('[placeholder="Short bio about you"]').focus().type(bio);
      cy.get('.btn').click;

      cy.visit(`/profile/${username}`);
      cy.get('.col-xs-12 > p').should('contain', 'sport');
      
    });

    it('should updating username', () => {
      cy.visit('/settings');
      cy.get('[placeholder="Username"]').focus().type(username);
      cy.get('.btn').click;

      cy.visit(`/profile/${username}`);
      cy.get('h4').should('contain', username);
      
    });

    it('should updating email', () => {
      cy.visit('/settings');
      cy.get('[placeholder="Email"]')
        .focus()
        .type('tester100@gmail.com');
      cy.get('.btn').click;
      
    });

    it('should updating password', () => {
      cy.visit('/settings');
      cy.get('[placeholder="New Password"]').focus().type(newPassword);
      cy.get('.btn').click;
    });

});