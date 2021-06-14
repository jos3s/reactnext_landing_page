import styled from 'styled-components';

import { Title } from './../Heading/styles';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  gap: ${({ theme }) => theme.spacings.large};

  @media ${({ theme }) => theme.media.lteMedium} {
    grid-template-columns: 1fr;
    text-align: center;
  }

  ${Title} {
    margin-bottom: ${({ theme }) => theme.spacings.xlarge};
  }
`;

export const TextContainer = styled.div`
  @media ${({ theme }) => theme.media.lteMedium} {
    margin-bottom: ${({ theme }) => theme.spacings.large};
  }
`;

export const ImageContainer = styled.div``;

export const Image = styled.img`
  width: 100%;
`;
