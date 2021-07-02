import styled, { css } from 'styled-components';
import { Container as TextComponent } from '../TextComponent/styles';

export const Container = styled.div`
  ${TextComponent} {
    margin-bottom: ${({ theme }) => theme.spacings.xhuge};
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: ${({ theme }) => theme.spacings.large};

  @media ${({ theme }) => theme.media.lteMedium} {
    grid-template-columns: 1fr;
  }
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
