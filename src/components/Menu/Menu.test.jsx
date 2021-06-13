import { screen, fireEvent } from '@testing-library/react';
import { Menu } from '.';
import { renderTheme } from '../../styles/renderTheme';
import { theme } from '../../styles/theme';

import linksMock from './../NavLinks/mock';
const logoData = {
  text: 'logo',
  link: '#target',
};

describe('<Menu />', () => {
  it('should render Logo and Main Menu Nav', () => {
    const { container } = renderTheme(
      <Menu links={linksMock} logoData={logoData} />,
    );
    expect(screen.getByRole('heading', { name: 'logo' })).toBeInTheDocument();
    expect(
      screen.getByRole('navigation', { name: 'Main menu' }),
    ).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it('should render menu mobile and button for open/close menu', () => {
    renderTheme(<Menu links={linksMock} logoData={logoData} />);

    const button = screen.getByLabelText('Open/Close Menu');
    const menuContainer = button.nextSibling;

    expect(button).toHaveStyleRule('display', 'none');
    expect(button).toHaveStyleRule('display', 'flex', {
      media: theme.media.lteMedium,
    });

    expect(menuContainer).toHaveStyleRule('opacity', '0', {
      media: theme.media.lteMedium,
    });
    expect(button).getByLabelText('Open menu').toBeInTheDocument();

    fireEvent.click(button);
    expect(menuContainer).toHaveStyleRule('opacity', '1', {
      media: theme.media.lteMedium,
    });
    expect(button).getByLabelText('Close menu').toBeInTheDocument();

    fireEvent.click(menuContainer);
    expect(menuContainer).toHaveStyleRule('opacity', '0', {
      media: theme.media.lteMedium,
    });
    expect(button).getByLabelText('Open menu').toBeInTheDocument();
  });

  it('should not rener links', () => {
    const { container } = renderTheme(<Menu logoData={logoData} />);

    expect(
      screen.queryByRole('navigation', { name: 'Main menu' }).firstChild,
    ).not.toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});
