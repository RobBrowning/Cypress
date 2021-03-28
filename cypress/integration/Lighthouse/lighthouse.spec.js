describe('Lighthouse tests', () => {
  it('homepage', () => {
    cy.visit('/');
    cy.lighthouse({
      performance: 60,
      'first-contentful-paint': 2000,
      'time-to-interactive': 2000,
      accessibility: 80,
      'best-practices': 80,
      seo: 85,
    });
  });
});
