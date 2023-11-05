import { StoryObj, Meta } from '@storybook/react';
import { ShoeFinder, ShoeFinderProps } from './ShoeFinder';

const meta: Meta = {
  title: 'components/atoms/ShoeFinder',
  component: ShoeFinder,
};

export default meta;

type Story = StoryObj<ShoeFinderProps>;

export const Primary: Story = {
  render: (args) => <ShoeFinder {...args} />,
  args: {},
};
