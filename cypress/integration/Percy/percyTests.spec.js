describe('percy tests', () => {
  it('should screenshot homepage', () => {
    cy.visit('/');
    cy.wait(3000);
    cy.percySnapshot();
  });
});
