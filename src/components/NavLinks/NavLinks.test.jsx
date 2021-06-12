import { screen } from '@testing-library/react';
import { NavLinks } from '.';
import { renderTheme } from '../../styles/renderTheme';
import { theme } from '../../styles/theme';

import mock from './mock.js';

describe('<NavLinks />', () => {
  it('should render links', () => {
    renderTheme(<NavLinks links={mock}></NavLinks>);
    expect(screen.getAllByRole('link')).toHaveLength(mock.length);
  });
  it('should not render links', () => {
    renderTheme(<NavLinks />);
    expect(screen.queryAllByText(/links/i)).toHaveLength(0);
  });
  it('should render links', () => {
    renderTheme(<NavLinks links={mock}></NavLinks>);
    expect(screen.getByText(/link 10/i).parent).toHaveStyleRule('flex-flow', 'column wrap', {
      media: theme.media.lteMedium,
    });
  });
  it('should match snapshot', () => {
    const { container } = renderTheme(<NavLinks links={mock}></NavLinks>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
