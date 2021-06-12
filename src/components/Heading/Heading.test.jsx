import { screen } from '@testing-library/react';
import Heading from '.';
import { renderTheme } from '../../styles/renderTheme';
import { theme } from '../../styles/theme';

describe('<Heading />', () => {
  it('should render with default values', () => {
    renderTheme(<Heading>Text</Heading>);
    const heading = screen.getByRole('heading', { name: 'text' });

    expect(heading).toHaveStyle({
      color: theme.colors.primaryColor,
      'font-size': theme.font.sizes.xhuge,
      'text-transform': 'none',
    });
  });
  it('should render with white color', () => {
    renderTheme(<Heading colorDark={false}>Text</Heading>);
    const heading = screen.getByRole('heading', { name: 'text' });

    expect(heading).toHaveStyle({
      color: theme.colors.white,
    });
  });
  it('should render correct heading size', () => {
    renderTheme(<Heading size="small">Text</Heading>);
    const heading = screen.getByRole('heading', { name: 'text' });

    expect(heading).toHaveStyle({
      'font-size': theme.font.sizes.medium,
    });
  });
  it('should render correct font-size when using mobile', () => {
    renderTheme(<Heading size="huge">Text</Heading>);
    const heading = screen
      .getByRole('heading', { name: 'text' })
      .toHaveStyleRule('font-size', theme.font.sizes.xlarge, {
        media: theme.media.lteMedium,
      });

    expect(heading).toHaveStyle({
      'font-size': theme.font.sizes.xlarge,
    });
  });
  it('should render with uppercase letters', () => {
    renderTheme(<Heading uppercase={true}>Text</Heading>);
    const heading = screen.getByRole('heading', { name: 'text' });

    expect(heading).toHaveStyle({
      'text-transform': 'uppercase',
    });
  });
  it('should render correct heading element', () => {
    const { container } = renderTheme(<Heading as="h6">Text</Heading>);
    const h6 = container.querySelector('h6');
    expect(h6.tagName.toLowerCase()).toBe('h6');
  });
});
