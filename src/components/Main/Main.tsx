import { GamesList } from 'Components/GamesList/GamesList';
import { InfoBox } from 'Components/InfoBox/InfoBox';
import { Loader } from 'Components/Loader/Loader';
import { useError } from 'Hooks/useError';
import { useGetGameByParamsQuery } from 'Hooks/useGetGameByParamsQuery';
import css from './Main.module.scss';

export const Main = () => {
  const { data, isFetching } = useGetGameByParamsQuery();
  const error = useError();

  return (
    <main className={css.main}>
      {isFetching && <Loader />}
      {error && <InfoBox text={error} />}
      <GamesList data={data} />
    </main>
  );
};
