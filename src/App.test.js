import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the application', () => {
  render(<App />);
  const header = screen.getByText(/jokes/i);
  expect(header).toBeInTheDocument();
});
