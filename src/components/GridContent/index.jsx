import P from 'prop-types';
import * as Styled from './styles';
import { Heading } from '../Heading';
import { SectionBackground } from '../SectionBackground';
import { TextComponent } from '../TextComponent/';

export const GridContent = ({
  title,
  html,
  backgroundDark = false,
  sectionId = '',
}) => {
  return (
    <SectionBackground backgroundDark={backgroundDark} sectionId={sectionId}>
      <Styled.Container>
        <Heading uppercase colorDark={!backgroundDark} as="h2">
          {title}
        </Heading>
        <Styled.Html>
          <TextComponent>{html}</TextComponent>
        </Styled.Html>
      </Styled.Container>
    </SectionBackground>
  );
};

GridContent.propTypes = {
  title: P.string.isRequired,
  html: P.string.isRequired,
  backgroundDark: P.bool,
  sectionId: P.string,
};
