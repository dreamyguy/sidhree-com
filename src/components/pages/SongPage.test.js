import React from "react";
import { render } from "@testing-library/react";
import SongPage from "./SongPage";

test("renders heading", () => {
  const { getAllByText } = render(<SongPage />);
  const heading = getAllByText(/Wallace Sidhrée/i)[0];
  expect(heading).toBeInTheDocument();
  expect(heading).toHaveClass(
    "heading-one open-sans-light fg-sb-graylighter gutter-top-half no-margin-bottom"
  );
  expect(heading).toBeVisible();
});
