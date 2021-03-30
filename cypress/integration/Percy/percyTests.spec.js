import { cookieBanner, homepage, navigation } from '../../pageObjects/objects';
const cookie = new cookieBanner();
const home = new homepage();

describe('percy tests', () => {
  it('should screenshot homepage', () => {
    cy.visit('/');
    cy.get(home.pickswiseLogo).should('be.visible');
    cy.get(cookie.agreeButton).should('be.visible').click();
    cy.scrollTo('bottom');

    cy.wait(9000);
    cy.percySnapshot();
  });
});
