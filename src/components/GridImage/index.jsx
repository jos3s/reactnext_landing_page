import P from 'prop-types';
import * as Styled from './styles';
import { Heading } from '../Heading';
import { SectionBackground } from '../SectionBackground';
import { TextComponent } from '../TextComponent';

export const GridImage = ({
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
            <Styled.GridElement key={cell.srcImg + cell.altText}>
              <Styled.Image src={cell.srcImg} alt={cell.altText} />
            </Styled.GridElement>
          ))}
        </Styled.Grid>
      </Styled.Container>
    </SectionBackground>
  );
};

GridImage.propTypes = {
  title: P.string.isRequired,
  description: P.string.isRequired,
  grid: P.arrayOf(
    P.shape({
      altText: P.string.isRequired,
      srcImg: P.string.isRequired,
    }),
  ).isRequired,
  backgroundDark: P.bool,
  sectionId: P.string,
};
