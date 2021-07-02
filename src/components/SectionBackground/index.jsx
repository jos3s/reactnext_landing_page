import P from 'prop-types';
import { SectionContainer } from '../SectionContainer';
import * as Styled from './styles';

export const SectionBackground = ({
  children,
  backgroundDark = false,
  sectionId = 'sectionId',
}) => {
  return (
    <Styled.Container backgroundDark={backgroundDark} id={sectionId}>
      <SectionContainer>{children}</SectionContainer>
    </Styled.Container>
  );
};

SectionBackground.propTypes = {
  children: P.node.isRequired,
  backgroundDark: P.bool,
  sectionId: P.string,
};
