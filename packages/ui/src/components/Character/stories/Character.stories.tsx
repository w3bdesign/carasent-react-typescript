import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Character } from './Character.component';

const meta = {
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
} satisfies Meta<typeof Character>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    id: 2,
    priority: true,
  },
};
