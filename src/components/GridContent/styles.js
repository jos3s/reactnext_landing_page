import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  max-width: 58rem;
  margin: 0 auto;
`;

export const Html = styled.div`
  margin: ${({ theme }) => theme.spacings.large} 0;
`;
