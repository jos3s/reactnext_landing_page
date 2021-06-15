import styled, { css } from 'styled-components';
import { Title as HeadingContainer } from '../Heading/styles';
import { Container as TextComponent } from '../Heading/styles';

export const Container = styled.div`
  ${TextComponent} {
    margin-bottom: ${({ theme }) => theme.spacings.xhuge};
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: ${({ theme }) => theme.spacings.large};
`;

export const GridElement = styled.div`
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  transition: all 300ms easy-in-out;

  &:hover {
    transform: scale(1.2) rotate(10deg);
  }
`;
