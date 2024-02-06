import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { WrappedApp, App } from './App';

describe('App', () => {
  it('Renders stepper component', () => {
    // ARRANGE
    render(<WrappedApp />);
    // ACT
    // EXPECT
    const nextBtn = screen.getByText('Next');
    expect(nextBtn).toBeDefined();
    const previousBtn = screen.getByText('Previous');
    expect(previousBtn).toBeDefined();
  });
  it('Renders not found if invalid path', () => {
    render(
      <MemoryRouter initialEntries={['/this-route-does-not-exist']}>
        <App />
      </MemoryRouter>
    );
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Not Found');
  });
});
