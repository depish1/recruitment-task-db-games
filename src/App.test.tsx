import { describe, test, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { App } from './App';
import { renderWithProviders } from './test-utils';

describe('<App />', () => {
  test('App mounts properly', () => {
    const wrapper = renderWithProviders(<App />);
    expect(wrapper).toBeTruthy();

    const h1 = wrapper.container.querySelector('h1');
    expect(h1?.textContent).toBe('Games DB');
  });
});
