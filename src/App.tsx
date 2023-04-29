import { Main } from 'Components/Main/Main';
import { Header } from 'Components/Header/Header';
import css from './App.module.scss';

export const App = () => (
  <div className={css.layout}>
    <Header />
    <Main />
  </div>
);
