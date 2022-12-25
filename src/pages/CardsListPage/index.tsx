import React, { useEffect } from 'react';
import Loader from '../../components/Loader/Loader';
import CardList from '../../components/CardList';
import { useAppDispatch } from '../../store/store';
import { useSelector } from 'react-redux';
import { getCards, getErrorStatus, getLoadingStatus } from '../../store/selectors/cards';
import { fetchCards } from '../../store/thunks/cardsFetch';

const CardsListPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCards());
  }, []);

  const cards = useSelector(getCards);
  const isLoading = useSelector(getLoadingStatus);
  const isError = useSelector(getErrorStatus);

  if (isLoading) return <Loader />;

  if (isError) return <h1>Something wrong. Please try later.</h1>;

  return <CardList cards={cards} />;
};

export default CardsListPage;
