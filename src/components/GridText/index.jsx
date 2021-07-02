import P from 'prop-types';
import * as Styled from './styles';
import { Heading } from '../Heading';
import { SectionBackground } from '../SectionBackground';
import { TextComponent } from '../TextComponent';

export const GridText = ({
  title,
  description,
  grid,
  backgroundDark = false,
  sectionId = '',
}) => {
  return (
    <SectionBackground backgroundDark={backgroundDark} sectionId={sectionId}>
      <Styled.Container>
        <Heading size="huge" uppercase colorDark={!backgroundDark} as="h2">
          {title}
        </Heading>
        <TextComponent>{description}</TextComponent>
        <Styled.Grid>
          {grid.map((cell) => (
            <Styled.GridElement key={cell.title}>
              <Heading size="medium" colorDark={!backgroundDark} as="h3">
                {cell.title}
              </Heading>
              <TextComponent>{cell.description}</TextComponent>
            </Styled.GridElement>
          ))}
        </Styled.Grid>
      </Styled.Container>
    </SectionBackground>
  );
};

GridText.propTypes = {
  title: P.string.isRequired,
  description: P.node.isRequired,
  grid: P.arrayOf(
    P.shape({
      title: P.string.isRequired,
      description: P.string.isRequired,
    }),
  ).isRequired,
  backgroundDark: P.bool,
  sectionId: P.string,
};
