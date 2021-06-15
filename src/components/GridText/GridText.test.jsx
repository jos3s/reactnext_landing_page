import { screen } from '@testing-library/react';
import { GridText } from '.';
import { renderTheme } from '../../styles/renderTheme';

import mock from './mock.js';

describe('<GridText />', () => {
  it('should render with background', () => {
    const { container } = renderTheme(<GridText {...mock} />);
    expect(container).toMatchSnapshot();
  });
  it('should render without background', () => {
    const { container } = renderTheme(
      <GridText {...mock} backgroundDark={undefined} />,
    );
    expect(container).toMatchSnapshot();
  });
});
