import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

global.IntersectionObserver = class IntersectionObserver {
  constructor() {}

  observe() {
    return null;
  }

  disconnect() {
    return null;
  }

  unobserve() {
    return null;
  }
};

test("renders wihtout crashing", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Image of the Day/i);
  expect(linkElement).toBeInTheDocument();
});
