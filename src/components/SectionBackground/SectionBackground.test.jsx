import { screen } from '@testing-library/react';
import { SectionBackground } from '.';
import { renderTheme } from '../../styles/renderTheme';

describe('<SectionBackground />', () => {
  it('should render with dark background', () => {
    const { container } = renderTheme(
      <SectionBackground backgroundDark={true}>Children</SectionBackground>,
    );
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('should render with light background', () => {
    const { container } = renderTheme(
      <SectionBackground>Children</SectionBackground>,
    );
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
