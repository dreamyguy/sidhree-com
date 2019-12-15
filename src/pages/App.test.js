import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders heading', () => {
  const { getAllByText } = render(<App />);
  const heading = getAllByText(/Wallace Sidhrée/i)[0];
  expect(heading).toBeInTheDocument();
  expect(heading).toHaveClass('heading-one open-sans-bold fg-fav-occre-dark gutter-top-half no-margin-bottom');
  expect(heading).toBeVisible();
});
