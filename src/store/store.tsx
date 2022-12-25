import { AnyAction, combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { authSlice } from './slices/authSlice';
import { cardsSlice } from './slices/cardsSlice';
import { useDispatch } from 'react-redux';
import { formSlice } from './slices/formSlice';

const rootReducer = combineReducers({
  auth: authSlice.reducer,
  cards: cardsSlice.reducer,
  form: formSlice.reducer
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
});

export type RootState = ReturnType<typeof rootReducer>;
export type CommonThunkAction = ThunkAction<void, RootState, unknown, AnyAction>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
