import moment from 'moment';

import { GameType, PlatformType } from 'Types/games.types';
import css from './SingleGame.module.scss';

type PropsType = GameType;

const getPlatformsString = (platforms: PlatformType[]) => {
  const platformsNamesArr = platforms.map((el) => el.platform?.name);

  return platformsNamesArr.join(', ');
};

export const SingleGame = ({ background_image, name, platforms, released }: PropsType) => (
  <article className={css.game}>
    <div className={css.gameImgContainer}>
      <img alt={`${name} game image`} className={css.gameImg} src={background_image} />
    </div>
    <div className={css.gameDescription}>
      <h2 className={css.gameName}>{name}</h2>
      <span className={css.gameDetails}>
        <span>Release date: </span>
        <span>{moment(released).format('LL')}</span>
      </span>
      <span className={css.gameDetails}>
        <span>Platforms: </span>
        {platforms && <span>{getPlatformsString(platforms)}</span>}
      </span>
    </div>
  </article>
);
