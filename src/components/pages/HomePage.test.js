import React from "react";
import { render } from "@testing-library/react";
import HomePage from "./HomePage";

test("renders heading", () => {
  const { getAllByText } = render(<HomePage />);
  const heading = getAllByText(/Wallace Sidhrée/i)[0];
  expect(heading).toBeInTheDocument();
  expect(heading).toHaveClass(
    "heading-one open-sans-bold fg-fav-occre-dark gutter-top-half no-margin-bottom"
  );
  expect(heading).toBeVisible();
});
