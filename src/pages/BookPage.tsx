/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BodyTemplate from '../components/BodyTemplate/BodyTemplate';
import SubscribeTemplate from '../components/SubscribeTemplate/SubscribeTemplate';
import BookInfo from '../components/BookInfo/BookInfo';
import { detailedBookSelector } from '../store/slices/books/books.selectors';

import { AppDispatch } from '../store';
import { fetchDetailedBook } from '../store/thunks/books/fetchNewReleases';
import { H2 } from '../styles/components';

export default function BookPage() {
  const book = useSelector(detailedBookSelector);
  const dispatch = useDispatch<AppDispatch>();
  const { isbn13 } = useParams();
  useEffect(() => {
    const getNewReleases = async () => {
      if (isbn13 !== undefined) dispatch(fetchDetailedBook({ isbn13 }));
    };
    getNewReleases();
  }, []);
  return (
    <BodyTemplate title={book?.title} backButton>
      {book !== null ? (
        <BookInfo book={book} />
      ) : (
        <H2>LOADING... PLEASE WAIT</H2>
      )}
      <SubscribeTemplate />
    </BodyTemplate>
  );
}
