import React from "react";
import { render } from "@testing-library/react";
import Menu from "./Menu";

it("renders Filters correctly", () => {
  const { getByText, getByRole, getAllByRole } = render(<Menu />);
  const title = getByText(/Image of the Day/i);
  const viral = getByRole("button");
  const filters = getAllByRole("combobox");
  expect(title).toBeInTheDocument();
  expect(viral).toBeInTheDocument();
  filters.map((button) => expect(button).toBeInTheDocument());
});
