import React from "react";
import { render, screen } from "@testing-library/react";
import { expect, describe, test } from "vitest";
import "@testing-library/jest-dom/vitest";

import Hero from "../landing_page/home/Hero";

//Test Suite
describe("Hero Component", () => {
  test("renders hero image", () => {
    render(<Hero />);
    const heroImage = screen.getByAltText("homeHero image");
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute(
      "src",
      expect.stringContaining("homeHero.png"),
    );
  });

  test("renders signup button", () => {
    render(<Hero />);
    const signupButton = screen.getByRole("button", {
      name: /Sign up for free/i,
    });
    expect(signupButton).toBeInTheDocument();
    expect(signupButton).toHaveClass("btn");
  });
});
