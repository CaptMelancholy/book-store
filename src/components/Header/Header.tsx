import {
  FaRegUser,
  FaRegHeart,
  FaBagShopping,
  FaMagnifyingGlass,
} from 'react-icons/fa6';
import { Link, generatePath, useNavigate } from 'react-router-dom';

import { useRef } from 'react';
import * as C from '../../styles/components';
import * as S from './styles';
import DefaultRoutes from '../../utils/Routes/Routes';

export default function Header() {
  const inputSearchRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const handleSearch = () => {
    if (inputSearchRef.current) {
      const path = generatePath(DefaultRoutes.search, {
        search: inputSearchRef.current.value,
        page: '1',
      });
      navigate(path);
    }
  };
  return (
    <S.Header>
      <S.HeaderContainer>
        <Link to={generatePath(DefaultRoutes.default)}>
          <C.H2>BOOKSTORE</C.H2>
        </Link>
        <S.SearchContainer>
          <S.SearchInput ref={inputSearchRef} placeholder="Search..." />
          <S.IconButtonInInput onClick={handleSearch} type="submit">
            <FaMagnifyingGlass />
          </S.IconButtonInInput>
        </S.SearchContainer>
        <S.HeaderMenu>
          <S.HeaderMenuLink>
            <Link to={generatePath(DefaultRoutes.favorite)}>
              <FaRegHeart />
            </Link>
          </S.HeaderMenuLink>
          <S.HeaderMenuLink>
            <Link to={generatePath(DefaultRoutes.cart)}>
              <FaBagShopping />
            </Link>
          </S.HeaderMenuLink>
          <S.HeaderMenuLink>
            <Link to={generatePath(DefaultRoutes.authorization)}>
              <FaRegUser />
            </Link>
          </S.HeaderMenuLink>
        </S.HeaderMenu>
      </S.HeaderContainer>
    </S.Header>
  );
}
