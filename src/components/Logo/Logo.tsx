import { GameIcon } from 'Icons/GameIcon';
import css from './Logo.module.scss';

export const Logo = () => (
  <div className={css.logo}>
    <GameIcon />
    <h1 className={css.logoText}>Games DB</h1>
  </div>
);
