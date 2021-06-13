import { screen } from '@testing-library/react';
import { LogoLink } from '.';
import { renderTheme } from '../../styles/renderTheme';

describe('<LogoLink />', () => {
  it('should render text logo', () => {
    renderTheme(<LogoLink link="#target" text="Ola mundo"></LogoLink>);
    const heading = screen.getByRole('heading', { name: 'Ola mundo' });
    expect(heading.firstChild).toHaveAttribute('href', '#target');
  });

  it('should render image logo', () => {
    renderTheme(
      <LogoLink link="#target" text="Ola mundo" srcImg="logo.svg"></LogoLink>,
    );
    screen.getByRole('heading', { name: 'Ola mundo' });
    expect(screen.getByAltText('Ola mundo')).toHaveAttribute('src', 'logo.svg');
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(
      <LogoLink link="#target" text="Ola mundo" srcImg="logo.svg"></LogoLink>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
