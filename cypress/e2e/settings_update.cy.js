/// <reference types='cypress' />

describe('Updating', () => {
    let user;
    let updated;

  
    beforeEach(() => {
      cy.visit('user/login');
      cy.task('generateUser').then((generateUser) => {
        user = generateUser;
      });
      cy.task('generateUpdateData').then((generateUpdateData) => {
        updated = generateUpdateData;
      });
    });
    
  
    it('should updating bio', () => {
      cy.login(user.username, user.email, user.password);
      cy.visit('/settings')
      cy.url().should('include', 'settings')

      cy.get('[placeholder="Short bio about you"]').clear().type(updated.newBio);
      cy.contains('[type="submit"]', 'Update Settings').click();
      
      
      cy.visit(`/profile/${(user.username).toLowerCase()}`);
      cy.get('.col-xs-12 > p').contains(updated.newBio);
      
    });

    it('should updating username', () => {
      cy.login(user.username, user.email, user.password);
      cy.visit('/settings')
      cy.get('[placeholder="Username"]').clear().type(updated.newUsername);
      cy.contains('[type="submit"]', 'Update Settings').click();

      cy.visit(`/profile/${(updated.newUsername).toLowerCase()}`);
      cy.get('h4').should('contain', (updated.newUsername).toLowerCase());
      
    });

    it('should updating email', () => {
      cy.login(user.username, user.email, user.password);
      cy.visit('/settings')
      cy.get('[placeholder="Email"]').clear().type(updated.newEmail);
      cy.contains('[type="submit"]', 'Update Settings').click();

      
      cy.get('[placeholder="Email"]').should('exist', `value="${updated.newEmail}"`)

      
      
    });

    it('should updating password', () => {
      cy.login(user.username, user.email, user.password);
      cy.visit('/settings')
      cy.get('[placeholder="New Password"]').focus().type(updated.newPassword);
      cy.contains('[type="submit"]', 'Update Settings').click();
    }); 
});
