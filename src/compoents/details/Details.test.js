import React from "react";
import { render } from "@testing-library/react";
import Details from "./Details";

jest.mock("react-router-dom", () => ({
  useHistory: () => ({
    location: {
      state: {
        images: [{ link: "http", description: "berlin" }],
        title: "My image",
        ups: 21,
        downs: 12,
        score: 112,
      },
    },
  }),
}));

it("renders Details about the image correctly", () => {
  const { getByText } = render(<Details />);
  const upsElement = getByText(/21 ups/i);
  const downsElement = getByText(/12 downs/i);
  const scoreElement = getByText(/12 score/i);
  expect(upsElement).toBeInTheDocument();
  expect(downsElement).toBeInTheDocument();
  expect(scoreElement).toBeInTheDocument();
});
