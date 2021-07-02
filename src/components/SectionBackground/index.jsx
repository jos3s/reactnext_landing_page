import P from 'prop-types';
import { SectionContainer } from '../SectionContainer';
import * as Styled from './styles';

const random = () => `id-${Math.random() * 1000}`.replace(/[^a-z0-9-_]/gi, '-');

export const SectionBackground = ({
  children,
  backgroundDark = false,
  sectionId = 'sectionId',
}) => {
  const id = sectionId ? sectionId : random;

  return (
    <Styled.Container backgroundDark={backgroundDark} id={id}>
      <SectionContainer>{children}</SectionContainer>
    </Styled.Container>
  );
};

SectionBackground.propTypes = {
  children: P.node.isRequired,
  backgroundDark: P.bool,
  sectionId: P.string,
};
