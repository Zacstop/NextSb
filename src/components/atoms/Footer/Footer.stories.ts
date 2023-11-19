import { Meta, StoryObj } from '@storybook/react';
import { Footer } from './Footer';

const meta: Meta = {
  component: Footer,
};

export default meta;

export const Default: StoryObj<typeof meta> = {
  args: {
    title: 'KubeCRO',
    des: '빠르고 편리한 임상플랫폼',
  },
};
