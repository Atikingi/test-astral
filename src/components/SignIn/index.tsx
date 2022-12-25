import React, { useState } from 'react';
import { useAppDispatch } from '../../store/store';
import { signIn, signOut } from '../../store/slices/authSlice';
import { login, password } from '../../constants/credentials';
import styles from './style.module.css';

type Props = {
  isAuth: boolean;
};

const SignIn = ({ isAuth }: Props) => {
  const dispatch = useAppDispatch();

  const [userLogin, setLogin] = useState('');
  const [userPassword, setPassword] = useState('');
  const [credentialsError, setCredentialsError] = useState(false);

  const loginHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = e;

    setLogin(target.value);
  };

  const passwordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = e;

    setPassword(target.value);
  };

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    userLogin === login && userPassword === password
      ? dispatch(signIn({ name: login }))
      : setCredentialsError(true);
  };

  const hideError = () => {
    setCredentialsError(false);
  };

  const signOutHandler = () => {
    dispatch(signOut());
  };

  if (isAuth) {
    return (
      <form className={styles.container}>
        <button className={styles.button} onClick={signOutHandler}>
          Выйти
        </button>
      </form>
    );
  }

  return (
    <form className={styles.container} onSubmit={submitForm}>
      {credentialsError && <p className={styles.error}>Wrong login or password</p>}
      <label className={styles.inputBlock}>
        <input
          className={styles.input}
          name="login"
          placeholder="Login"
          value={userLogin}
          onChange={loginHandler}
          onFocus={hideError}
        />
        <input
          className={styles.input}
          type="password"
          name="password"
          placeholder="Password"
          value={userPassword}
          onChange={passwordHandler}
          onFocus={hideError}
        />
      </label>
      <button type="submit" className={styles.button}>
        Войти
      </button>
    </form>
  );
};

export default SignIn;
