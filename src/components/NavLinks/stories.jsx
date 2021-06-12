import { NavLinks } from '.';

import links from './mock.js';

export default {
  title: 'NavLinks',
  component: NavLinks,
  args: {
    links: links,
  },
  argsTypes: {
    links: { type: 'none' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <NavLinks {...args} />
    </div>
  );
};
