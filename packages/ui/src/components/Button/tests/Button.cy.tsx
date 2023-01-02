/// <reference types="cypress" />

import Button from "../Button.component";

describe("<Button>", () => {
  it("mounts", () => {
    cy.mount(<Button variant="primary">Test</Button>);
    cy.get("[data-cy=submit]").should("have.text", "Test");
  });
});
