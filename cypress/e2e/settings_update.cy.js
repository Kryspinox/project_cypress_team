/// <reference types='cypress' />

describe('Updating', () => {
    const bio = 'Short bio';
    const username = 'tester89';
    const loginMail = 'tester89@wp.pl'
    const loginPassword = 'tester89'

    let updated;
    
  
    beforeEach(() => {
      cy.visit('user/login');
      cy.get('[placeholder="Email"]').type(loginMail);  
      cy.get('[placeholder="Password"]').type(loginPassword);
      cy.contains('.btn', 'Sign in').click();

      cy.task('generateUpdateData').then((generateUpdateData) => {
        updated = generateUpdateData;
      });
    });
    
  
    it('should updating bio', () => {
      cy.get('[href="/settings"]').click();
      cy.url().should('include', 'settings')

      cy.get('[placeholder="Short bio about you"]').clear().type(updated.newBio);
      cy.contains('[type="submit"]', 'Update Settings').click();
      
      
      cy.visit(`/profile/${username}`);
      cy.get('.col-xs-12 > p').contains(updated.newBio);
      
    });

    it('should updating username', () => {
      cy.get('[href="/settings"]').click();
      cy.get('[placeholder="Username"]').clear().type(updated.newUsername);
      cy.contains('[type="submit"]', 'Update Settings').click();

      cy.visit(`/profile/${(updated.newUsername).toLowerCase()}`);
      cy.get('h4').should('contain', (updated.newUsername).toLowerCase());
      
    });

    it('should updating email', () => {
      cy.get('[href="/settings"]').click();
      cy.get('[placeholder="Email"]').clear().type(updated.newEmail);
      cy.contains('[type="submit"]', 'Update Settings').click();

      
      cy.get('[placeholder="Email"]').should('exist', `value="${updated.newEmail}"`)

      
      
    });

    it('should updating password', () => {
      cy.get('[href="/settings"]').click();
      cy.get('[placeholder="New Password"]').focus().type(updated.newPassword);
      cy.contains('[type="submit"]', 'Update Settings').click();
    });
  

});