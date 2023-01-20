import React, { Fragment } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

interface IRadioProps {
  options: string[];
  labelText: string;
  name: string;
}

type TOptionsValue = string;

const Radio = ({ name, options, labelText }: IRadioProps): JSX.Element => {
  return (
    <>
      <div className="mx-auto text-center w-64">
        <fieldset>
          <div className="block mt-4">
            <legend className="block mb-1 text-gray-600">
              {name} {labelText}
            </legend>
          </div>
          {options?.map((value: TOptionsValue) => (
            <Fragment key={value}>
              <div className="flex items-center mb-4">
                <input
                  type="radio"
                  value={value}
                  id={value}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor={value}
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 mx-auto"
                >
                  {value}
                </label>
              </div>
            </Fragment>
          ))}
        </fieldset>
        <span className="text-red-600 text-xl p-2 block mt-2">
          Eksempel feilmelding
        </span>
      </div>
    </>
  );
};

export default {
  title: 'Components/UI/Radio',
  component: Radio,
  argTypes: {
    name: {
      description: 'Navn på komponent',
    },
    options: {
      description: 'Array med valg',
      options: ['primary', 'secondary'],
      control: 'array',
    },
    labelText: {
      description: 'Tekst på label',
    },
  },
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = ({
  name,
  options,
  labelText,
}: IRadioProps) => (
  <Radio name={name} options={options} labelText={labelText} />
);

export const Primary = Template.bind({});

Primary.args = {
  name: 'Label',
  options: ['Option #1', 'Option #2'],
  labelText: 'Tekst',
};
