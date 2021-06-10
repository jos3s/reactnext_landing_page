import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${(props) => css`
    background: ${props.background};
  `}
  color:${(props) => props.color || 'black'}
`;
