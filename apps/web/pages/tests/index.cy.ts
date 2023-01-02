/// <reference types="cypress"/>

describe("Forside", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.injectAxe();
  });

  it(`Button vises på forsiden`, () => {
    cy.get('[data-cy="submit"]').contains("Submit");
  });

  it("Har ingen a11y feilmeldinger", () => {
    cy.wait(3000); // Wait for 3 seconds so data has been fetched first
    cy.checkA11y();
  });
});

export {};
