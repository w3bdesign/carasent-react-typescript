import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Character, ICharacterProps } from './Character.component';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/UI/Character',
  component: Character,
  argTypes: {
    id: {
      description: 'ID på Character',
      control: 'number',
    },
    priority: {
      description: 'Prioritet loading på Character',
      control: 'boolean',
    },
  },
} as ComponentMeta<typeof Character>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Character> = ({
  id,
  priority,
}: ICharacterProps) => <Character id={id} priority={priority} />;

export const Primary = Template.bind({});

Primary.args = {
  id: 2,
  priority: true,
};
