import { Base } from '.';

import mock from './mock';
import { GridText } from '../../components/GridText';
import gridMock from '../../components/GridText/mock';

export default {
  title: 'Templates/Base',
  component: Base,
  args: {
    children: (
      <>
        <GridText {...gridMock} />
        <GridText {...gridMock} backgroundDark />
        <GridText {...gridMock} />
        <GridText {...gridMock} backgroundDark />
      </>
    ),
    ...mock,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <Base {...args} />
    </div>
  );
};
