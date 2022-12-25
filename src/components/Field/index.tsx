import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../store/store';
import { changeInputs } from '../../store/slices/formSlice';
import { isDriverInputDisabled, isEmailInputDisabled } from '../../store/selectors/form';
import { InputProps } from '../../types/inputs';
import styles from './style.module.css';

const Field = ({
  type,
  name,
  displayName,
  checkboxValues,
  options,
  radioValues,
  group
}: InputProps) => {
  const dispatch = useAppDispatch();

  const [value, setValue] = useState('');

  const isEmailDisabled = useSelector(isEmailInputDisabled);
  const isDriverLicenseDisabled = useSelector(isDriverInputDisabled);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = e;

    setValue(target.value);
  };

  const disableHandler = (inputName: string) => {
    switch (inputName) {
      case 'email-input':
        return isEmailDisabled;
      case 'driverLicense-input':
        return isDriverLicenseDisabled;
      default:
        return;
    }
  };

  const storedCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = e;

    dispatch(
      changeInputs({
        checkboxName: target.name
      })
    );
  };

  return (
    <>
      {!checkboxValues && !radioValues && !options && type !== 'checkbox' && (
        <div className={styles.singleInput}>
          <label htmlFor={`${name}-input`}>{displayName}</label>
          <input
            className={styles.inputField}
            type={type}
            name={`${name}-input`}
            value={value}
            onChange={changeHandler}
            id={`${name}-input`}
            disabled={disableHandler(`${name}-input`)}
          />
        </div>
      )}
      {type === 'checkbox' && !checkboxValues && (
        <div className={styles.singleInput}>
          <label htmlFor={`${name}-checkbox`}>{displayName}</label>
          <input
            type={type}
            name={`${name}-checkbox`}
            value={value}
            onChange={storedCheckbox}
            id={`${name}-checkbox`}
          />
        </div>
      )}
      {checkboxValues && group && (
        <fieldset id={`${name}-fieldset`}>
          <legend>{displayName}</legend>
          {checkboxValues.map((value, i) => (
            <div key={`${name}-checkbox${i}`}>
              <input
                type="checkbox"
                name={`${name}-input`}
                value={value}
                id={`${name}-input${i}`}
              />
              <label htmlFor={`${name}-input${i}`}>{value}</label>
            </div>
          ))}
        </fieldset>
      )}
      {radioValues && (
        <fieldset>
          <legend>{displayName}</legend>
          {radioValues.map((value, i) => (
            <label key={`${name}-input${i}`} htmlFor={`${name}-input${i}`}>
              {value}
              <input type="radio" name={`${name}-input`} value={value} id={`${name}-input${i}`} />
            </label>
          ))}
        </fieldset>
      )}
      {options && (
        <select name={`${name}-input`} disabled={disableHandler(`${name}-input`)}>
          {options.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      )}
    </>
  );
};

export default Field;
