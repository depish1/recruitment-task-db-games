import { useGetGameByParamsQuery } from 'Hooks/useGetGameByParamsQuery';
import { pageSize } from 'src/config';

const minPage = 1;

const checkIfPageIsValid = (page: number, maxPage: number): boolean => {
  if (!maxPage) return true;
  return page >= minPage && page <= maxPage;
};

export const usePageValidation = (page: number) => {
  const { data } = useGetGameByParamsQuery();
  const maxPage = data?.count ? Math.ceil(data?.count / pageSize) : 0;
  const errorMessage = `Page must be between ${minPage} and ${maxPage}.`;

  const isPageValid = checkIfPageIsValid(page, maxPage);

  return isPageValid ? '' : errorMessage;
};
