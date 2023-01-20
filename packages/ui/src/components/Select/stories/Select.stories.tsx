import React, { Fragment } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import 'tailwindcss/tailwind.css';

interface ISelectProps {
  options: string[];
  labelText: string;
  name: string;
}

type TOptionsValue = string;

const Select = ({ name, options, labelText }: ISelectProps): JSX.Element => {
  return (
    <>
      <label htmlFor={name} className="block mt-4">
        <span className="block mb-1 text-gray-600">{labelText}</span>
        <select id={name} className="w-64 ">
          {options.map((value: TOptionsValue) => (
            <option value={value} key={value}>
              {value}
            </option>
          ))}
        </select>
        <span className="text-red-600 text-xl p-2 block mt-2">
          Eksempel feilmelding
        </span>
      </label>
    </>
  );
};

export default {
  title: 'Components/UI/Select',
  component: Select,
  argTypes: {
    name: {
      description: 'Navn på komponent',
    },
    options: {
      description: 'Primary or secondary button variant',
      options: ['primary', 'secondary'],
      control: 'array',
    },
    labelText: {
      description: 'Tekst på label',
    },
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = ({
  name,
  options,
  labelText,
}: ISelectProps) => (
  <Select name={name} options={options} labelText={labelText} />
);

export const Primary = Template.bind({});

Primary.args = {
  name: 'Tekst',
  options: ['Option #1', 'Option #2'],
  labelText: 'Label tekst',
};
