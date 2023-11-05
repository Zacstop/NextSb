import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ScrolledImg, ScrolledImgProps } from './ScrolledImg';

const meta: Meta = {
  title: 'components/atoms/ScrolledImg',
  component: ScrolledImg,
};

export default meta;

type Story = StoryObj<ScrolledImgProps>;
export const Primary: Story = {
  render: (args) => <ScrolledImg {...args} />,
  args: {
    imageLabel: '꼭 필요했던 서비스',
    imageUrl: 'https://picsum.photos/200/300',
  },
};

export const Secondary: Story = {
  render: (args) => <ScrolledImg {...args} />,
  args: {
    imageLabel: '세컨더리',
    imageUrl: 'https://picsum.photos/200/300',
  },
};
