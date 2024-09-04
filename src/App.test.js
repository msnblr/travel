// App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

import App from './App';


test('renders Home component on root path', async () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  );

  // Check if Home component is rendered
  expect(screen.getByText('Hello MSNBLR')).toBeInTheDocument();
});

test('renders About component on /about path', async () => {
  render(
    <MemoryRouter initialEntries={['/about']}>
      <App />
    </MemoryRouter>
  );

  // Assuming there is some unique text in the About component

});

test('renders Register component on /register path', async () => {
  render(
    <MemoryRouter initialEntries={['/register']}>
      <App />
    </MemoryRouter>
  );

  // Assuming there is some unique text in the Register component

});
