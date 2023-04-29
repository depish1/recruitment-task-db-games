import { useSelector } from 'react-redux';

import { paramsSelector } from 'Selectors/params';
import { useGetGamesQuery } from 'Store/api/gamesApi';

export const useGetGameByParamsQuery = () => {
  const params = useSelector(paramsSelector);
  const skip = !params.apiKey || !params.page;
  const data = useGetGamesQuery(params, { skip });

  return data;
};
