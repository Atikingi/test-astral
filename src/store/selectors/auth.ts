import { RootState } from '../store';

export const getAuthStatus = (state: RootState) => state.auth.isAuth;

export const getName = (state: RootState) => state.auth.name;
