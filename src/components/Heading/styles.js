import styled from 'styled-components';

export const Title = styled.h1`
  color: ${({ theme, light }) => (light ? theme.colors.white : theme.colors.primaryColor)};
`;
