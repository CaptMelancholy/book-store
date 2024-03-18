import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, auto));
  gap: 10px 48px;
  justify-content: space-between;
  min-height: 0;  /* NEW */
  min-width: 0;   /* NEW; needed for Firefox */
  margin-bottom: 72px;
`;
