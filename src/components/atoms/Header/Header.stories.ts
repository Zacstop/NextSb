import { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';

const meta: Meta = {
  component: Header,
};

export default meta;

export const Default: StoryObj<typeof meta> = {
  args: {
    title: 'Woori Bank',
    user: {
      name: 'kang san',
    },
    onLogout: () => console.log('logout'),
    onLogin: () => console.log('login'),
  },
};
