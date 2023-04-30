import { ChangeEvent, useMemo } from 'react';
import { useDispatch } from 'react-redux';

import { InputField } from 'Components/InputField/InputField';
import { KeyIcon } from 'Icons/KeyIcon';
import { setApiKey } from 'Store/slices/params';
import debounce from 'lodash.debounce';
import { defaultTimeout } from 'src/config';

export const ApiField = () => {
  const dispatch = useDispatch();

  const debounceChangeHandler = useMemo(
    () => debounce((e: ChangeEvent<HTMLInputElement>) => dispatch(setApiKey(e.target.value)), defaultTimeout),
    [dispatch],
  );

  return <InputField icon={<KeyIcon />} id="apiKey" name="apiKey" onChange={debounceChangeHandler} />;
};
