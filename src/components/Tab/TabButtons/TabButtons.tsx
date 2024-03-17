import ETabTypes from './TabButtons.types';
import * as S from './styles';

interface IProps {
  name: [...Array<string>];
  activeTab: number;
  setActiveTab: (activeTab: number) => void;
  typeButton: ETabTypes;
}

export default function TabButtons({
  name,
  activeTab,
  setActiveTab,
  typeButton,
}: IProps) {
  const tabButtonType = () => {
    if (typeButton === ETabTypes.BOLD) {
      return (
        <S.ButtonBoldWrapper>
          {name.map((title, index) => (
            <S.ButtonBold
              onClick={() => setActiveTab(index)}
              className={activeTab === index ? 'active' : ''}
            >
              {title}
            </S.ButtonBold>
          ))}
        </S.ButtonBoldWrapper>
      );
    }
    return (
      <S.ButtonDefaultWrapper>
        {name.map((title, index) => (
          <S.ButtonDefault
            onClick={() => setActiveTab(index)}
            className={activeTab === index ? 'active' : ''}
          >
            {title}
          </S.ButtonDefault>
        ))}
      </S.ButtonDefaultWrapper>
    );
  };
  return tabButtonType();
}
