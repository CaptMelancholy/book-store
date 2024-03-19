/* eslint-disable react/jsx-props-no-spreading */
import { useEffect, useState } from 'react';
import { Link, generatePath, useParams } from 'react-router-dom';
import axios from 'axios';
import { PaginationItem } from '@mui/material';
import { ISearchBook } from '../utils/Books/book.types';
import EAPIs from '../api/api-client';
import BodyTemplate from '../components/BodyTemplate/BodyTemplate';
import SubscribeTemplate from '../components/SubscribeTemplate/SubscribeTemplate';
import BookList from '../components/BookList/BookList';
import {
  H2,
  PaginationConatiner,
  StyledPagination,
} from '../styles/components';
import DefaultRoutes from '../utils/Routes/Routes';

export default function SearchPage() {
  const { search, page } = useParams();
  const [curSearchPage, setCurSearchPage] = useState<ISearchBook>();
  const [noOfPages, setNoOfPages] = useState<number>();

  useEffect(() => {
    const getSearchResult = async () => {
      if (search !== undefined && page !== undefined) {
        await axios
          .get(`${EAPIs.BOOK_API}/search/${search}/${page}`)
          .then(({ data }) => {
            setCurSearchPage(data);
            setNoOfPages(Math.ceil(parseInt(data.total, 10) / 10));
          });
      }
    };
    getSearchResult();
  }, [search, page]);
  return (
    <BodyTemplate
      title={`'${search}' SEARCH RESULTS`}
      subtitle={`Found ${curSearchPage?.total} books`}
      backButton
    >
      {curSearchPage !== undefined ? (
        <BookList books={curSearchPage.books} />
      ) : (
        <H2>Nothing here...</H2>
      )}
      <PaginationConatiner>
        {noOfPages && (
          <StyledPagination
            page={parseInt(`${page}`, 10)}
            count={noOfPages}
            hideNextButton
            hidePrevButton
            renderItem={(item) => (
              <PaginationItem
                component={Link}
                to={generatePath(DefaultRoutes.search, {
                  search,
                  page: item.page,
                })}
                {...item}
              />
            )}
          />
        )}
      </PaginationConatiner>
      <SubscribeTemplate />
    </BodyTemplate>
  );
}
