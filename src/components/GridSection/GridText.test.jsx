import { screen } from '@testing-library/react';
import { GridText } from '.';
import { renderTheme } from '../../styles/renderTheme';

import mock from './mock.js';

describe('<GridText />', () => {
  it('should render', () => {
    const { container } = renderTheme(<GridText {...mock} />);
    expect(container).toMatchSnapshot();
  });
});
