import styled from 'styled-components';
import { IconButtonWithBg, LinkHints } from '../../styles/components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 72px;
  margin-bottom: 72px;
`;

export const InfoSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 544px;
  background-color: ${({ theme }) => theme.colors.red};
  padding: 122px;
`;

export const Image = styled.img`
  object-fit: cover;
  width: 300px;
  height: 350px;
`;

export const ImageButton = styled(IconButtonWithBg)`
  position: absolute;
  top: 0px;
  right: 0px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 448px;
  gap: 5px;
  justify-content: space-between;
  padding-top: 40px;
  border-top: 1px solid ${({ theme }) => theme.colors.background_gray};
`;

export const Line = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const InfoButton = styled(LinkHints)`
  text-align: center;
`;

export const TabsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
