import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Header, IHeader } from '../Header.component';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/UI/Header',
  component: Header,
  argTypes: {
    title: {
      description: 'Primary or secondary Header variant',
      options: ['Header', 'Secondary header'],
      control: 'select',
    },
  },
} as ComponentMeta<typeof Header>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Header> = ({ title }: IHeader) => (
  <Header title={title} />
);

export const Primary = Template.bind({});

Primary.args = {
  title: 'Header',
};
