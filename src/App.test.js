import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders Retail Website link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Retail Website/i);
  expect(linkElement).toBeInTheDocument();
});
