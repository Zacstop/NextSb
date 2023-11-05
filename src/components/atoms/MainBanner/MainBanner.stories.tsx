import { Meta, StoryObj } from '@storybook/react';
import { MainBanner, MainBannerProps } from './MainBanner';

const meta: Meta = {
  title: 'components/atoms/MainBanner',
  component: MainBanner,
};

export default meta;
type Story = StoryObj<MainBannerProps>;

export const primary: Story = {
  render: (args) => <MainBanner {...args} />,
  args: {
    imageUrl: '/assets/images/bg.png',
  },
};
