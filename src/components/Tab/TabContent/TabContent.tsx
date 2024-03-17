import { ReactNode } from 'react';
import ETabTypes from '../TabButtons/TabButtons.types';
import * as S from './styles';

interface IProps {
  children?: ReactNode[];
  content?: [...Array<string>];
  activeTab: number;
  typeButton: ETabTypes;
}

export default function TabContent({
  children,
  content,
  activeTab,
  typeButton,
}: IProps) {
  const tabContentType = () => {
    if ((content || children) && (content !== undefined || children !== undefined)) {
      if (typeButton === ETabTypes.BOLD) {
        return (
          <S.ContentWrapperBold>
            {children?.map((el, index) => (
              <S.ContentBold className={activeTab === index ? 'active' : ''}>
                {el}
              </S.ContentBold>
            ))}
          </S.ContentWrapperBold>
        );
      }
      return (
        <S.ContentWrapperDefault>
          {content?.map((ins, index) => (
            <S.ContentDefault className={activeTab === index ? 'active' : ''}>
              {ins}
            </S.ContentDefault>
          ))}
        </S.ContentWrapperDefault>
      );
    }
    return 'Error';
  };
  return tabContentType();
}
