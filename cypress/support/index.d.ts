//Any Cypress custom commands from cypress/support/commands.js should also be added here to avoid syntax errors in the IDE

declare namespace Cypress {
  interface Chainable<Subject> {
    login(object: any): void;
    log(object: any): void;
    restUrl(): any;
    baseUrl(): any;
  }
}
