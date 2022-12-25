import axios from 'axios';
import { CommonThunkAction } from '../store';
import {
  clearCards,
  fetchCardsError,
  fetchCardsStarted,
  fetchCardsSuccess
} from '../slices/cardsSlice';
import { API_URL } from '../../constants/api';
import { CardProps } from '../types/types';

export const fetchCards = (): CommonThunkAction => async (dispatch) => {
  dispatch(clearCards());

  dispatch(fetchCardsStarted());

  try {
    // моковый запрос
    // const response = await axios.get('./mocks/cards.json');

    const response = await axios.get(`${API_URL}cards`);

    const cards: CardProps[] = response.data;

    if (cards) {
      dispatch(fetchCardsSuccess(cards));
    }
  } catch (error) {
    dispatch(fetchCardsError(error));
  }
};
