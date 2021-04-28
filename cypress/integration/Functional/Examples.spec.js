import { cookieBanner, homepage, navigation } from '../../pageObjects/objects';
const cookie = new cookieBanner();
const home = new homepage();
const nav = new navigation();

describe('', () => {
  it('example get text', () => {
    cy.visit(
      '/mlb/predictions/washington-nationals-vs-toronto-blue-jays-predictions/'
    );
    cy.get(home.pickswiseLogo).should('be.visible', { force: true });
    cy.get(cookie.agreeButton).should('be.visible').click({ force: true });
    cy.get(home.pickswiseLogo).should('be.visible', { force: true });

    cy.get(
      'body > div.ab-iam-root.v3.ab-animate-in.ab-animate-out.ab-effect-modal.ab-show > div.ab-in-app-message.ab-background.ab-modal-interactions.graphic.ab-modal.ab-centered > button',
      { timeout: 10000 }
    ).click();

    cy.get(
      'div:nth-child(1) > div.PickPrediction__body > div.PickPrediction__odds-bonus > div.PickPrediction__pick-content.PickPrediction__pick-content--odds > div.PickPrediction__pick-text.PickPrediction__pick-text--odds > button'
    ).click();
    cy.get('div.PickPrediction__betslip.PickPrediction__betslip--open')
      .find('div.PickPrediction__betslip-bookmaker')
      .each(($el, index, $list) => {
        const text = $el.find('div.PickPrediction__betslip-states').text();
        if (text.includes('NJ, PA')) {
          cy.log('did it get here?');
        }
      });

    cy.log('get the 4th item from list and click link');
    cy.get('div.PickPrediction__betslip.PickPrediction__betslip--open')
      .find('div.PickPrediction__betslip-bookmaker')
      .eq(3)
      .contains('See Full Sportsbook Review')
      .click();
  });

  it('use requests to navigation bar links', () => {
    const pages = ['MLB', 'NHL', 'Soccer'];

    cy.visit('/');

    pages.forEach((page) => {
      cy.contains(page).then((link) => {
        cy.request(link.prop('href')).should((response) => {
          expect(response.status).to.eq(200);
        });
      });
    });
  });
});
