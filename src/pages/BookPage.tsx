/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import BodyTemplate from '../components/BodyTemplate/BodyTemplate';
import SubscribeTemplate from '../components/SubscribeTemplate/SubscribeTemplate';
import BookInfo from '../components/BookInfo/BookInfo';

import { H2 } from '../styles/components';
import { fetchInfoBook } from '../api/api-client';
import { IDetailedBook } from '../utils/Books/book.types';

export default function BookPage() {
  const { isbn13 } = useParams();
  const [curBook, setCurBook] = useState<IDetailedBook>();
  useEffect(() => {
    const getNewReleases = async () => {
      if (isbn13 !== undefined) setCurBook(await fetchInfoBook(isbn13));
    };
    getNewReleases();
  }, []);
  return (
    <BodyTemplate title={curBook?.title} backButton>
      {curBook !== undefined ? (
        <BookInfo book={curBook} />
      ) : (
        <H2>LOADING... PLEASE WAIT</H2>
      )}
      <SubscribeTemplate />
    </BodyTemplate>
  );
}
