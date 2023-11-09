import { Meta, StoryObj } from '@storybook/react';
import { Card } from './Banner';

const meta: Meta = {
  component: Card,
};

export default meta;

export const Default: StoryObj<typeof meta> = {
  args: {
    title: 'XForm',
    des: 'XForm, a patented technology by kubeCRO, revolutionizes clinical trials by allowing various data formats without CRF coding, simplifying the process. It enables anyone to transform CRF into ECRF, cutting preparation time by over 70%. The technology supports text, images, and videos in a user-friendly form, making it both intuitive and efficient.',
  },
};
