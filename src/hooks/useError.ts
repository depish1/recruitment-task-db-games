import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query/react';
import { useSelector } from 'react-redux';

import { apiKeySelector } from 'Selectors/params';
import { useGetGameByParamsQuery } from 'Hooks/useGetGameByParamsQuery';

const handleAPIErrorMsg = (error: FetchBaseQueryError | SerializedError) => {
  if ('status' in error) {
    return error.status === 'FETCH_ERROR' ? 'Invalid API key' : 'Something went wrong';
  } else {
    return 'Something went wrong';
  }
};

export const useError = () => {
  const apiKey = useSelector(apiKeySelector);
  const { data, error, isFetching } = useGetGameByParamsQuery();

  let text = '';

  if (isFetching) {
    text = '';
  } else if (!apiKey) {
    text = 'Enter your API key';
  } else if (error) {
    text = handleAPIErrorMsg(error);
  } else if (!data?.results?.length) {
    text = 'No data found';
  }

  return text;
};
