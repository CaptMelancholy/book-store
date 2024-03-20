import { useRef, useState } from 'react';
import { useNavigate, generatePath, Link } from 'react-router-dom';
import { FaMagnifyingGlass, FaRegUser } from 'react-icons/fa6';
import { useSelector, useDispatch } from 'react-redux';
import * as S from './styles';
import * as C from '../../styles/components';
import DefaultRoutes from '../../utils/Routes/Routes';
import { authStatusSelector } from '../../store/slices/user/user.selectors';

import { AppDispatch } from '../../store';
import { setLogOut } from '../../store/slices/user/user.slice';

interface IProps {
  setShowScreenBlock: (data: boolean) => void;
}

export default function BurgerMenu({ setShowScreenBlock }: IProps) {
  const [open, setOpen] = useState<boolean>(false);
  const inputSearchRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const auth = useSelector(authStatusSelector);
  const dispatch = useDispatch<AppDispatch>();
  const handleClick = () => {
    if (!open) {
      document.body.style.overflow = 'hidden';
      setShowScreenBlock(true);
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } else {
      setShowScreenBlock(false);
      document.body.style.overflow = 'auto';
    }
    setOpen(!open);
  };
  const handleSearch = () => {
    if (inputSearchRef.current) {
      const path = generatePath(DefaultRoutes.search, {
        search: inputSearchRef.current.value,
        page: '1',
      });
      navigate(path);
    }
    handleClick();
  };
  const handleAuthorization = () => {
    if (auth) {
      dispatch(setLogOut());
      navigate(generatePath(DefaultRoutes.default));
    } else {
      navigate(generatePath(DefaultRoutes.account));
    }
    handleClick();
  };
  return (
    <>
      <S.MenuWrapper onClick={handleClick}>
        <S.MenuContainer className={open ? 'active' : ''}>
          <S.BurgerLine />
          <S.BurgerLine />
          <S.BurgerLine />
        </S.MenuContainer>
      </S.MenuWrapper>
      <S.Menu className={!open ? 'hide' : ''}>
        <C.H2>
          <Link to={generatePath(DefaultRoutes.default)} onClick={handleClick}>
            BOOKSTORE
          </Link>
        </C.H2>
        <Link to={generatePath(DefaultRoutes.account)} onClick={handleClick}>
          <FaRegUser />
        </Link>
        <S.MenuContent>
          <S.LinksContainer>
            <S.SearchContainer>
              <S.SearchInput ref={inputSearchRef} placeholder="Search..." />
              <S.IconButtonInInput onClick={handleSearch} type="submit">
                <FaMagnifyingGlass />
              </S.IconButtonInInput>
            </S.SearchContainer>
            <Link
              to={generatePath(DefaultRoutes.favorite)}
              onClick={handleClick}
            >
              <S.CustomLink>FAVORITES</S.CustomLink>
            </Link>
            <Link to={generatePath(DefaultRoutes.cart)} onClick={handleClick}>
              <S.CustomLink>CART</S.CustomLink>
            </Link>
          </S.LinksContainer>
          <C.Button onClick={handleAuthorization}>
            {auth ? 'LOG OUT' : 'SIGN IN'}
          </C.Button>
        </S.MenuContent>
      </S.Menu>
    </>
  );
}
