import { describe, test, expect } from 'vitest';

import { renderWithProviders } from 'src/test-utils';
import { pageSize } from 'src/config';
import { Main } from 'Components/Main/Main';

describe('<GamesList />', () => {
  test('GamesList properly display games', async () => {
    const reduxState = {
      params: {
        page: 1,
        searchKey: '',
        apiKey: import.meta.env.VITE_API_KEY || '',
      },
    };
    const gamesList = renderWithProviders(<Main />, { preloadedState: reduxState });
    expect(gamesList).toBeTruthy();
    const gamesArticles = await gamesList.findAllByRole('article');
    expect(gamesArticles.length).toEqual(pageSize);
  });
  test('GamesList properly display games for page 2 and searchKey', async () => {
    const reduxState = {
      params: {
        page: 2,
        searchKey: 'a',
        apiKey: import.meta.env.VITE_API_KEY || '',
      },
    };
    const gamesList = renderWithProviders(<Main />, { preloadedState: reduxState });
    expect(gamesList).toBeTruthy();
    const gamesArticles = await gamesList.findAllByRole('article');
    expect(gamesArticles.length).toEqual(pageSize);
  });
});
