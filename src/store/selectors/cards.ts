import { RootState } from '../store';

export const getCards = (state: RootState) => state.cards.cards;
export const getLoadingStatus = (state: RootState) => state.cards.loading;
export const getErrorStatus = (state: RootState) => state.cards.error;
