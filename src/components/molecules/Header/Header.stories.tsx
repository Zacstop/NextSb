import { Meta, StoryObj } from '@storybook/react';
import { Header, HeaderProps } from './Header';

const meta: Meta = {
  title: 'components/modules/Header',
  component: Header,
};

export default meta;
type Story = StoryObj<HeaderProps>;

export const primary: Story = {
  render: (args) => <Header {...args} />,
  args: {
    title: 'Woori Bank',
    user: {
      name: 'kang san',
    },
    onLogout: () => console.log('logout'),
    onLogin: () => console.log('login'),
    join: () => console.log('join'),
    menuList: [
      {
        name: 'home',
        link: '/',
      },
      {
        name: 'about',
        link: '/about',
      },
      {
        name: 'contact',
        link: '/contact',
      },
    ],
    containerColor: 'var(--Blue-primary, #3e86f5)',
  },
};
