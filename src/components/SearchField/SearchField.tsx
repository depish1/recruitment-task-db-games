import { ChangeEvent, KeyboardEvent, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import debounce from 'lodash.debounce';

import { InputField } from 'Components/InputField/InputField';
import { SearchIcon } from 'Icons/SearchIcon';
import { setSearchKey } from 'Slices/params';
import { defaultTimeout } from 'src/config';

export const SearchField = () => {
  const dispatch = useDispatch();

  const debounceChangeHandler = useMemo(
    () =>
      debounce((e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchKey(e.target.value));
      }, defaultTimeout),
    [dispatch],
  );

  const debounceKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code !== 'Enter') return;
    debounceChangeHandler.cancel();
    dispatch(setSearchKey(e.currentTarget.value));
  };

  return <InputField icon={<SearchIcon />} onChange={debounceChangeHandler} onKeyDown={debounceKeyDownHandler} />;
};
