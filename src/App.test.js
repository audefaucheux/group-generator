import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders title "Group Generator"', () => {
  const { getByText } = render(<App />);
  const groupSelector = getByText('Group Generator');
  expect(groupSelector).toBeInTheDocument();
});
