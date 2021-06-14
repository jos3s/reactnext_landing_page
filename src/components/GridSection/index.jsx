import P from 'prop-types';
import * as Styled from './styles';
import { Heading } from '../Heading';
import { SectionBackground } from '../SectionBackground';
import { TextComponent } from '../TextComponent/';

export const GridSection = ({ title, description, grid, backgroundDark }) => {
  return (
    <SectionBackground backgroundDark={backgroundDark}>
      <Styled.Container>
        <Heading size="huge" uppercase backgroundDark={!backgroundDark}>
          {title}
        </Heading>
        <TextComponent>{description}</TextComponent>
        <Styled.Grid>
          {grid.map((cell) => (
            <Styled.GridElement key={cell.title}>
              <Heading size="medium" colorDark={!backgroundDark}>
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

GridSection.propTypes = {
  title: P.string.isRequired,
  description: P.node.isRequired,
  grid: P.arrayOf({
    title: P.string.isRequired,
    description: P.node.isRequired,
  }).isRequired,
  backgroundDark: P.bool,
};