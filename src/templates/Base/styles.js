import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 5.4rem;

  @media ${({ theme }) => theme.media.lteMedium} {
    padding-top: 0;
  }
`;
