// Home.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for extended matchers
import Home from './Home';


// Mock the NavB component
jest.mock('./Navbar/NavB', () => () => <div>Mocked NavB</div>);

test('renders Home component with header and NavB', () => {
  // Render the Home component
  render(<Home />);
  
  // Check if NavB is rendered
  expect(screen.getByText('Mocked NavB')).toBeInTheDocument();
  
  // Check if the header text is rendered
  expect(screen.getByText('Hello MSNBLR')).toBeInTheDocument();
});
