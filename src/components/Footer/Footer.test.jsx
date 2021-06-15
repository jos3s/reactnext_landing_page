import { screen } from '@testing-library/react';
import { Footer } from '.';
import { renderTheme } from '../../styles/renderTheme';

describe('<Footer />', () => {
  it('should render', () => {
    const { container } = renderTheme(<Footer html="h1>Children</h1>" />);
    expect(
      screen.getByRole('heading', { name: 'Children' }),
    ).toBeInTheDocument();
    expect(container).toMatchInlineSnapshot;
  });
});
