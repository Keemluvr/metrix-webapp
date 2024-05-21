/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    visitURL(env: string, url: string): void;
    signInAndVisitURL(url: string): void;
    checkToastMessage(message: string): void;
    closeAllAlertMessages(): void;
  }
}
