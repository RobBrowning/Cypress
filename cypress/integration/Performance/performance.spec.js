import { cookieBanner, homepage, navigation } from '../../pageObjects/objects';
const cookie = new cookieBanner();
const home = new homepage();
const nav = new navigation();

describe('Check some performance metrics', () => {
  it('check page load time', () => {
    cy.visit('/', {
      onBeforeLoad: (win) => {
        win.performance.mark('start-loading');
      },
      onLoad: (win) => {
        win.performance.mark('end-loading');
      },
    })
      .its('performance')
      .then((p) => {
        p.measure('pageLoad', 'start-loading', 'end-loading');
        const measure = p.getEntriesByName('pageLoad')[0];

        assert.isAtMost(measure.duration, 3000);
      });
  });
});