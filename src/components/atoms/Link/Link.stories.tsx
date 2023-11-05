import { Meta, StoryObj } from '@storybook/react';
import { Link, LinkProps } from './Link';

const meta: Meta = {
  title: 'components/atoms/Link',
  component: Link,
};

export default meta;

type Story = StoryObj<LinkProps>;
export const Primary: Story = {
  render: (args) => <Link {...args} />,
  args: {
    menuList: [
      { name: 'Home', link: '/' },
      { name: 'Company', link: '/company' },
      { name: 'Contact', link: '/contact' },
      { name: 'Mpp', link: '/mpp' },
    ],
  },
};
