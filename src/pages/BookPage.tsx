/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import BodyTemplate from '../components/BodyTemplate/BodyTemplate';
import SubscribeTemplate from '../components/SubscribeTemplate/SubscribeTemplate';
import BookInfo from '../components/BookInfo/BookInfo';

import { H2 } from '../styles/components';
import EAPIs, { fetchInfoBook } from '../api/api-client';
import { IBook, IDetailedBook } from '../utils/Books/book.types';
import CustomSlider from '../components/Slider/CustomSlider';

export default function BookPage() {
  const { isbn13 } = useParams();
  const [curBook, setCurBook] = useState<IDetailedBook>();
  const [similarBooks, setSimilarBooks] = useState<Array<IBook>>([]);
  useEffect(() => {
    const getSimilar = async () => {
      const books = await axios
        .get(`${EAPIs.BOOK_API}/search/similar/`)
        .then(({ data }) => data.books);
      setSimilarBooks(books);
    };
    const getNewReleases = async () => {
      if (isbn13 !== undefined) {
        setCurBook(await fetchInfoBook(isbn13));
      }
    };
    getNewReleases();
    getSimilar();
  }, []);
  return (
    <BodyTemplate title={curBook?.title} backButton>
      {curBook !== undefined ? (
        <BookInfo book={curBook} />
      ) : (
        <H2>LOADING... PLEASE WAIT</H2>
      )}
      <SubscribeTemplate />
      {similarBooks && (
        <CustomSlider title="SIMILAR BOOKS" books={similarBooks} />
      )}
    </BodyTemplate>
  );
}
