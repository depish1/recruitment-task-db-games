import { ChangeEventHandler, KeyboardEventHandler, ReactNode } from 'react';
import classNames from 'classnames';

import css from './InputField.module.scss';

type PropsType = {
  error?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
  icon?: ReactNode;
  id: string;
  label?: string;
  name: string;
  type?: 'string' | 'number';
  value?: string;
};

export const InputField = ({ error, icon, id, label, name, onChange, onKeyDown, type, value }: PropsType) => (
  <div className={css.inputField}>
    <div className={css.inputFieldWrapper}>
      {!!label && (
        <label className={css.inputFieldLabel} htmlFor={id}>
          {label}
        </label>
      )}
      <input
        className={classNames(css.inputFieldInput, { [css.inputFieldInputWithIcon]: !!icon })}
        id={id}
        name={name}
        onChange={onChange}
        onKeyDown={onKeyDown}
        type={type}
        value={value}
      />
      {!!icon && icon}
    </div>
    {!!error && <span className={css.inputFieldError}>{error}</span>}
  </div>
);
