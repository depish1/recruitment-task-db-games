import { InputField } from 'Components/InputField/InputField';
import { KeyIcon } from 'Icons/KeyIcon';
import { usePageField } from './usePageField';

export const PageField = () => {
  const { value, changeHandler, errorMsg } = usePageField();

  return <InputField error={errorMsg} icon={<KeyIcon />} label="Go to page" onChange={changeHandler} value={`${value}`} />;
};
