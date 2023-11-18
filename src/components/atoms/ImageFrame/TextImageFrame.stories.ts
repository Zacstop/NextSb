import { Meta, StoryObj } from '@storybook/react';
import { TextImageFrame } from './TextImageFrame';

const meta: Meta = {
  component: TextImageFrame,
};

export default meta;

export const Default: StoryObj<typeof meta> = {
  args: {
    title: '쉽고, 간편한 서비스',
    imageSrc: 'http://placehold.it/200x200',
  },
};
