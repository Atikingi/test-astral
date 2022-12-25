import { createSlice } from '@reduxjs/toolkit';
import { CardProps } from '../types/types';

type Props = {
  loading: boolean | null;
  error: string | null;
  cards: CardProps[];
};

const initialState: Props = {
  loading: null,
  error: null,
  cards: []
};

export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    fetchCardsStarted: (state) => {
      state.loading = true;
    },
    fetchCardsSuccess: (state, action) => {
      state.error = null;
      state.loading = false;
      state.cards = action.payload;
    },
    fetchCardsError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearCards: (state) => {
      state.cards = [];
    }
  }
});

export const { fetchCardsStarted, fetchCardsSuccess, fetchCardsError, clearCards } =
  cardsSlice.actions;
export default cardsSlice.reducer;
