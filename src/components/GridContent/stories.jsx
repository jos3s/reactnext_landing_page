import { GridContent } from '.';

import mock from './mock.js';

export default {
  title: 'GridContent',
  component: GridContent,
  args: mock,
};

export const Template = (args) => {
  return (
    <div>
      <GridContent {...args} />
    </div>
  );
};
