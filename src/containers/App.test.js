import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders wihtout crashing", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Image of the Day/i);
  expect(linkElement).toBeInTheDocument();
});
