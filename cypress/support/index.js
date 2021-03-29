// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';
import 'cypress-axe';

// Alternatively you can use CommonJS syntax:
// require('./commands')
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  debugger;
  return false;
});

beforeEach(function () {
  window.logCalls = 1;
  window.testFlow = [];
});

Cypress.Commands.overwrite('log', (originalFn, message) => {
  Cypress.log({
    displayName: `--- ${window.logCalls}. ${message} ---`,
    name: `--- ${window.logCalls}. ${message} ---`,
    message: '',
  });

  window.testFlow.push(`${window.logCalls}. ${message}`);
  window.logCalls++;
});

Cypress.on('fail', (error) => {
  throw new Error(error + '\n\nTest flow:\n' + window.testFlow.join('\n'));
});
