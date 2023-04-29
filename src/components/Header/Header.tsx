import { ApiField } from 'Components/ApiField/ApiField';
import { Logo } from 'Components/Logo/Logo';
import { SearchField } from 'Components/SearchField/SearchField';
import styles from './Header.module.scss';

export const Header = () => (
  <header className={styles.header}>
    <Logo />
    <SearchField />
    <ApiField />
  </header>
);
