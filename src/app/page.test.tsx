import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import Home from '../../../page';

describe('WelcomePage Component', () => {
  test('renders without crashing', () => {
    render(<Home />);
    expect(screen.getByText('Welcome.')).toBeInTheDocument();
  });
});
