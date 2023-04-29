import { GetGamesResponseType } from 'Types/games.types';
import { PageField } from 'Components/PageField/PageField';
import { SingleGame } from 'Components/SingleGame/SingleGame';
import css from './GamesList.module.scss';

type PropsType = {
  data: GetGamesResponseType | undefined;
};

export const GamesList = ({ data }: PropsType) => (
  <section className={css.gamesList}>
    {data && data.results.map((el) => <SingleGame key={el.id} {...el} />)}
    <div className={css.gamesListInputWrapper}>
      <PageField />
    </div>
  </section>
);
