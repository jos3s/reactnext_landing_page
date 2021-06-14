import { GridTwoColumn } from '.';
import { renderTheme } from '../../styles/renderTheme';

import mock from './mock.js';

describe('<GridTwoColumn />', () => {
  it('should render two column grid', () => {
    const { container } = renderTheme(<GridTwoColumn {...mock} />);
    expect(container).toMatchSnapshot();
  });
});
