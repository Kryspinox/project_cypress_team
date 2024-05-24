import './commands';
import { generateUser } from "./generate";

describe('Negative sign in', () => {

  let user; 

    beforeEach(() => {
      cy.visit('/login');
      beforeEach(() => {
        cy.task('generateUser').then((generateUser) => {

          user = generateUser;
          
        });
    });

it('should not log in with non registered email', () => {

  });

  it('should not log in with wrong password', () => {
 
  });

  it('should not log in with empty email field', () => {
 
  });

  it('should not log in with empty password field', () => {

  });

  it('should log in with empty fields', () => {
 
  });  
});
});