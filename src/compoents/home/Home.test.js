import React from "react";
import { render } from "@testing-library/react";
import Home from "./Home";

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

const props = { section: "user", viral: "all", sort: "user", window: true };
it("renders Home Component", () => {
  render(<Home props />);
});
