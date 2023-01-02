/**
 * @jest-environment jsdom
 */

import React from "react";

import { render, screen } from "@testing-library/react";

import { Button } from "../Button.component";

describe("Button", () => {
  beforeEach(() => {
    render(<Button>Test</Button>);
  });

  it("should be in the document", () => {
    const button = screen.getByRole("button", { name: /test/i });
    expect(button).toBeInTheDocument();
  });

  it("should render test", () => {
    const button = screen.getByRole("button", { name: /test/i });
    expect(button).toHaveTextContent("Test");
  });
});
