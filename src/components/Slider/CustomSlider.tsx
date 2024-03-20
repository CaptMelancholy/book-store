/* eslint-disable react/jsx-props-no-spreading */
import Slider, { Settings } from 'react-slick';
import { useRef } from 'react';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';
import { IBook } from '../../utils/Books/book.types';
import * as S from './styles';
import * as C from '../../styles/components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Book from '../Book/Book';

interface IProps {
  books: Array<IBook>;
  title: string;
}

export default function CustomSlider({ books, title }: IProps) {
  const slider = useRef<Slider>(null);
  const settings: Settings = {
    slidesToScroll: 1,
    slidesToShow: 3,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          infinite: true,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          infinite: true,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const returnSlider = () => {
    if (books.length !== 0) {
      return (
        <S.Wrapper>
          <S.InfoContainer>
            <C.SUBLINE>{title}</C.SUBLINE>
            <S.ArrowsContainer>
              <C.IconButton>
                <FaArrowLeftLong onClick={slider?.current?.slickPrev} />
              </C.IconButton>
              <C.IconButton>
                <FaArrowRightLong onClick={slider?.current?.slickNext} />
              </C.IconButton>
            </S.ArrowsContainer>
          </S.InfoContainer>
          <S.WrapperSlider>
            <Slider ref={slider} {...settings}>
              {books.map((book) => <Book book={book} />)}
            </Slider>
          </S.WrapperSlider>
        </S.Wrapper>
      );
    }
    return <div />;
  };

  return returnSlider();
}
