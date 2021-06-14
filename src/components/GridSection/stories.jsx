import { GridSection } from '.';

import mock from './mock.js';

export default {
  title: 'GridSection',
  component: GridSection,
  args: mock,
};

export const Template = (args) => {
  return (
    <div>
      <GridSection {...args} />
    </div>
  );
};
