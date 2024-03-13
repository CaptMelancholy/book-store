import styled from 'styled-components';

export const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, auto));
  gap: 10px 48px;
  justify-content: space-between;
  min-height: 0;  /* NEW */
  min-width: 0;   /* NEW; needed for Firefox */
`;
