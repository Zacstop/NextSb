import { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';

const meta: Meta = {
  title: 'Components/Header',
  component: Header,
  argTypes: {
    user: {
      control: {
        type: 'object',
      },
    },
    title: {
      control: 'text',
    },
    onLogin: { action: 'onLogin' },
    onLogout: { action: 'onLogout' },
  },
};

export default meta;

export const Default: StoryObj<typeof meta> = {
  args: {
    title: 'Woori Bank',
    user: {
      name: 'kang san',
    },
  },
};
