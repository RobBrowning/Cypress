import { cookieBanner, homepage, navigation } from '../../pageObjects/objects';
const cookie = new cookieBanner();
const home = new homepage();
const nav = new navigation();

describe('home page tests', () => {
  //This will assert main elements on the page exist
  it('should assert elements exist', () => {
    cy.visit('/');
    cy.get(home.pickswiseLogo).should('be.visible');
    cy.get(cookie.agreeButton).should('be.visible').click({ force: true });
    cy.get(home.pickswiseLogo).should('be.visible', { force: true });

    cy.get(home.promoCodeCard).should('be.visible');
    cy.get(home.twitterFeedComponent).should('be.visible');
    cy.get(home.NBAGamesPanelComponent).should('be.visible');
    cy.get(home.NHLGamesPenelComponent).should('be.visible');
    cy.get(home.collegeGamesPanelComponent).should('be.visible');
  });

  it('Should assert navigation available', () => {
    cy.visit('/');
    cy.get(home.pickswiseLogo).should('be.visible');
    cy.get(cookie.agreeButton).should('be.visible').click({ force: true });
    cy.get(home.pickswiseLogo).should('be.visible', { force: true });

    cy.get(nav.nbaLink).should('be.visible');
    cy.get(nav.cbbLink).should('be.visible');
    cy.get(nav.MarchMadness).should('be.visible');
    cy.get(nav.nhlLink).should('be.visible');
    cy.get(nav.freeBetsLink).should('be.visible');
    cy.get(nav.usBettingLink).should('be.visible');
    cy.get(nav.MoreHamburger).should('be.visible');
  });

  it('Should assert redirects exist', () => {
    cy.visit('/');
    cy.get(home.pickswiseLogo).should('be.visible');
    cy.get(cookie.agreeButton).should('be.visible').click({ force: true });
    cy.get(home.pickswiseLogo).should('be.visible', { force: true });

    cy.get(home.bet365ClamButton)
      .should('have.attr', 'href')
      .should(
        'equal',
        'https://www.pickswise.com/redirect/?url=http://bit.ly/bet365UK'
      );
    cy.get(home.pageSectionBet365Button)
      .should('have.attr', 'href')
      .should(
        'equal',
        'https://www.pickswise.com/redirect/?url=http://bit.ly/bet365UK'
      );
    cy.get(home.pageSectionBetWilliamHillButton)
      .should('have.attr', 'href')
      .should(
        'equal',
        'https://www.pickswise.com/redirect/?url=http://bit.ly/WHpromocodes'
      );
    cy.get(home.pageSectionVirginBetButton)
      .should('have.attr', 'href')
      .should(
        'equal',
        'https://www.pickswise.com/redirect/?url=http://bit.ly/VBpromocodes'
      );
  });
  //Assert mobile viewports - elements exist
  it('Should assert mobile - iPhoneX', () => {
    cy.viewport('iphone-x');
    cy.visit('/');
    cy.get(home.pickswiseLogo).should('be.visible');
    cy.get(cookie.agreeButton).should('be.visible').click({ force: true });
    cy.get(home.pickswiseLogo).should('be.visible', { force: true });

    cy.get(home.promoCodeCard).should('be.visible');
    cy.get(home.twitterFeedComponent).should('be.hidden');
    cy.get(home.NBAGamesPanelComponent).should('be.visible');
    cy.get(home.NHLGamesPenelComponent).should('be.visible');
    cy.get(home.collegeGamesPanelComponent).should('be.visible');
  });
});
