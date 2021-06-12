import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: 'Texto aleatorio e deveria ser giante mais n e',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div style={{ maxWidth: '64rem', padding: '3rem' }}>
      <TextComponent {...args} />
    </div>
  );
};
