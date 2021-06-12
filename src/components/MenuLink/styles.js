import styled from 'styled-components';

export const Container = styled.a`
  color: ${({ theme }) => theme.colors.primaryColor};
  font-size: ${({ theme }) => theme.font.sizes.small};
  padding: ${({ theme }) => theme.spacings.small};
  text-decoration: none;
  display: block;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0.76rem;
    width: 0;
    left: 50%;
    height: 0.2rem;
    background: ${({ theme }) => theme.colors.secondaryColor};
    transition: all 300ms ease-in-out;
  }

  &:hover::after {
    width: 50%;
    left: 25%;
  }
`;
