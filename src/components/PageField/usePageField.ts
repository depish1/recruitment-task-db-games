import { ChangeEvent, useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import debounce from 'lodash.debounce';

import { defaultTimeout } from 'src/config';
import { searchKeySelector } from 'Selectors/params';
import { setPage } from 'Slices/params';
import { usePageValidation } from 'Components/PageField/usePageValidation';

const pageInitialValue = 1;

export const usePageField = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(pageInitialValue);
  const searchKey = useSelector(searchKeySelector);
  const errorMsg = usePageValidation(value);

  const changeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { value: newValue } = e.target;
    const isNumber = /^\d+$/.test(newValue);
    (isNumber || !newValue) && setValue(+newValue);
  }, []);

  const debounceUpdateParams = useMemo(() => debounce((value: number) => dispatch(setPage(value)), defaultTimeout), [dispatch]);

  useEffect(() => {
    !errorMsg && debounceUpdateParams(value);

    return () => debounceUpdateParams.cancel();
  }, [debounceUpdateParams, errorMsg, value]);

  useEffect(() => {
    dispatch(setPage(pageInitialValue));
    setValue(pageInitialValue);
  }, [dispatch, searchKey]);

  return { value, changeHandler, errorMsg };
};
