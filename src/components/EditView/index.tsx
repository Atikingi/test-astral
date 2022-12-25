import React from 'react';
import Field from '../Field';
import styles from './style.module.css';
import { InputProps } from '../../types/inputs';

type Props = {
  inputsArray: InputProps[];
};

const EditView = ({ inputsArray }: Props) => {
  return (
    <form className={styles.form}>
      {inputsArray.map(
        ({ type, name, checkboxValues, radioValues, group, displayName, options }) => (
          <Field
            key={`${name}-input`}
            type={type}
            name={name}
            displayName={displayName}
            checkboxValues={checkboxValues}
            radioValues={radioValues}
            options={options}
            group={group}
          />
        )
      )}
    </form>
  );
};

export default EditView;
