import { screen } from '@testing-library/react';
import { GridImage } from '.';
import { renderTheme } from '../../styles/renderTheme';

import mock from './mock.js';

describe('<GridImage />', () => {
  it('should render with background', () => {
    const { container } = renderTheme(<GridImage {...mock} />);
    expect(container).toMatchSnapshot();
  });
  it('should render without background', () => {
    const { container } = renderTheme(
      <GridImage {...mock} backgroundDark={undefined} />,
    );
    expect(container).toMatchSnapshot();
  });
});
