import { screen } from '@testing-library/react';
import Home from '.';
import { renderTheme } from '../../styles/renderTheme';

test('renders learn react link', () => {
  renderTheme(<Home />);
  const headingContainer = screen.getByRole('heading', { name: 'Hello World' }).parentElement;
  expect(headingContainer).toHaveStyle({
    background: 'tomato',
  });
  expect(headingContainer).toMatchSnapshot();
  expect(headingContainer).toHaveStyleRule('background', 'tomato');
});
