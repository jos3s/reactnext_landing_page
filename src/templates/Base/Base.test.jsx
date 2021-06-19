import { screen } from '@testing-library/react';
import { Base } from '.';
import { renderTheme } from '../../styles/renderTheme';

import mock from './mock';

describe('<Base />', () => {
  it('should render', () => {
    const { container } = renderTheme(<Base {...mock} />);
    expect(container).toMatchSnapshot();
  });
});
