import {
  FaRegUser,
  FaRegHeart,
  FaBagShopping,
  FaMagnifyingGlass,
  FaArrowRightFromBracket,
} from 'react-icons/fa6';
import { Link, generatePath, useNavigate } from 'react-router-dom';

import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as C from '../../styles/components';
import * as S from './styles';
import DefaultRoutes from '../../utils/Routes/Routes';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import { authStatusSelector } from '../../store/slices/user/user.selectors';
import { AppDispatch } from '../../store';
import { setLogOut } from '../../store/slices/user/user.slice';

interface IProps {
  setShowScreenBlock: (data: boolean) => void;
}

export default function Header({ setShowScreenBlock }: IProps) {
  const inputSearchRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const auth = useSelector(authStatusSelector);
  const handleSearch = () => {
    if (inputSearchRef.current) {
      const path = generatePath(DefaultRoutes.search, {
        search: inputSearchRef.current.value,
        page: '1',
      });
      navigate(path);
    }
  };
  const handleLogOut = () => {
    dispatch(setLogOut());
    navigate(generatePath(DefaultRoutes.default));
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
          <S.HeaderMenuLinkAccount>
            <Link to={generatePath(DefaultRoutes.account)}>
              <FaRegUser />
            </Link>
          </S.HeaderMenuLinkAccount>
          <S.HeaderMenuLink
            className={!auth ? 'active' : ''}
            onClick={handleLogOut}
          >
            <FaArrowRightFromBracket />
          </S.HeaderMenuLink>
          <BurgerMenu setShowScreenBlock={setShowScreenBlock} />
        </S.HeaderMenu>
      </S.HeaderContainer>
    </S.Header>
  );
}
