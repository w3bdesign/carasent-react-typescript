import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

interface IInputProps {
  name: string;
  placeholder?: string;
  labelText: string;
}

const Input = ({ name, placeholder, labelText }: IInputProps): JSX.Element => {
  return (
    <>
      <label htmlFor={name} className="block mt-4">
        <span className="block mb-1 text-gray-600">{labelText}</span>
        <input
          placeholder={placeholder}
          className="w-64 px-4 py-2 mt-2 text-base bg-white border border-gray-400 rounded focus:outline-none focus:border-black"
          id={name}
        />
        <span className="text-red-600 text-xl p-2 block mt-2">
          Eksempel feilmelding
        </span>
      </label>
    </>
  );
};

export default {
  title: 'Components/UI/Input',
  component: Input,
  argTypes: {
    name: {
      description: 'Navn på input',
    },
    placeholder: {
      description: 'Placeholder tekst i input',
    },
    labelText: {
      description: 'Tekst på label',
    },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = ({
  name,
  placeholder,
  labelText,
}: IInputProps) => (
  <Input name={name} placeholder={placeholder} labelText={labelText} />
);

export const Primary = Template.bind({});

Primary.args = {
  name: 'Tekst',
  placeholder: 'Placeholder',
  labelText: 'Label tekst',
};
