import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ theme, backgroundDark }) =>
    backgroundDark ? theme.colors.primaryColor : theme.colors.white};
  color: ${({ theme, backgroundDark }) =>
    backgroundDark ? theme.colors.white : theme.colors.primaryColor};

  min-height: 100vh;
  display: flex;
  align-items: center;
`;
