import { cookieBanner, homepage, navigation } from '../../pageObjects/objects';
const cookie = new cookieBanner();
const home = new homepage();
const nav = new navigation();

describe('API tests', () => {
  it('should test an API', () => {
    cy.intercept('https://sdk.fra-01.braze.eu/api/v3/data/', {consentedToAny: true})
  });
});
