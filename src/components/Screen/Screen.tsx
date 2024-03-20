import ScreenBlock from './styles';

interface IProps {
  show: boolean;
}

export default function Screen({ show }: IProps) {
  return <ScreenBlock className={show ? '' : 'hide'} />;
}
