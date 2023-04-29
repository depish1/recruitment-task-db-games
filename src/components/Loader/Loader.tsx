import classNames from 'classnames';

import css from './Loader.module.scss';

export const Loader = () => (
  <div className={css.loader}>
    <span className={css.loaderDots} />
    <span className={classNames(css.loaderDot, css.loaderDotSecond)} />
    <span className={classNames(css.loaderDot, css.loaderDotThird)} />
  </div>
);
