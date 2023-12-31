import { StoryFn, Meta } from '@storybook/react';

import { Main } from './index';

export default {
  title: 'components/atoms/Main',
  component: Main,
} as Meta;

export const Default: StoryFn = (args) => <Main {...args} />;
