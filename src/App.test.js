import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('value formatter and cell renderer', async () => {
  // First render the App component we wish to tests
  render(<App />);

  // Test the value formatter by searching for the correct string
  expect(screen.getByText('Arb %')).toBeDefined();

  // Now find the expected content of the cell renderer
  const marketColumn = await screen.findByText('Market');
  expect(marketColumn).toBeDefined();

});
