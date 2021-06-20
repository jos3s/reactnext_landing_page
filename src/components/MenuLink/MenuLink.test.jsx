import { screen } from '@testing-library/react';
import { MenuLink } from '.';
import { renderTheme } from '../../styles/renderTheme';

describe('<MenuLink />', () => {
  it('should render a link', () => {
    renderTheme(<MenuLink link="https://localhost">Children</MenuLink>);
    expect(screen.getByRole('link', { name: 'Children' })).toHaveAttribute(
      'target',
      '_self',
    );
  });
  it('should render open in new tab', () => {
    renderTheme(
      <MenuLink link="https://localhost" newTab>
        Children
      </MenuLink>,
    );
    expect(screen.getByRole('link', { name: 'Children' })).toHaveAttribute(
      'target',
      '_blank',
    );
  });
  it('should render open in new tab', () => {
    const { container } = renderTheme(
      <MenuLink link="https://localhost">Children</MenuLink>,
    );
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        color: #0A1128;
        font-size: 1.6rem;
        padding: 1.6rem;
        -webkit-text-decoration: none;
        text-decoration: none;
        display: block;
        position: relative;
      }

      .c0::after {
        content: '';
        position: absolute;
        bottom: 0.76rem;
        width: 0;
        left: 50%;
        height: 0.2rem;
        background: #dc143c;
        -webkit-transition: all 300ms ease-in-out;
        transition: all 300ms ease-in-out;
      }

      .c0:hover::after {
        width: 50%;
        left: 25%;
      }

      <a
        class="c0"
        href="https://localhost"
        target="_self"
      >
        Children
      </a>
    `);
  });
});
