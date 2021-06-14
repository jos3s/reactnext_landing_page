import P from 'prop-types';
import * as Styled from './styles';
import { Heading } from '../Heading';
import { SectionBackground } from '../SectionBackground';
import { TextComponent } from '../TextComponent/';

export const GridContent = ({ title, html, backgroundDark = false }) => {
  return (
    <SectionBackground backgroundDark={backgroundDark}>
      <Styled.Container>
        <Heading uppercase colorDark={!backgroundDark}>
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
};
