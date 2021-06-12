import { screen } from '@testing-library/react';
import { MenuLink } from '.';
import { renderTheme } from '../../styles/renderTheme';

describe('<MenuLink />', () => {
  it('should render a link', () => {
    renderTheme(<MenuLink link="https://localhost">Children</MenuLink>);
    expect(screen.getByRole('link', { name: 'Children' })).toHaveAttribute('target', '_self');
  });
  it('should render open in new tab', () => {
    renderTheme(
      <MenuLink link="https://localhost" newTab>
        Children
      </MenuLink>,
    );
    expect(screen.getByRole('link', { name: 'Children' })).toHaveAttribute('target', '_blank');
  });
  it('should render open in new tab', () => {
    renderTheme(<MenuLink link="https://localhost">Children</MenuLink>);
    expect(screen.getByRole('link', { name: 'Children' })).toMatchInlineSnapshot();
  });
});
