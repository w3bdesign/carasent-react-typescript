import { Fragment } from "react";
import { useFormContext } from "react-hook-form";

export interface IRadioProps {
  options: string[];
  labelText: string;
  name: string;
}

export type TOptionsValue = string;

/**
 * Radio component used for selecting data in form
 * @function Radio
 * @param {string[]} options Array of options 
 * @param {string} labelText - Label text for select
 * @param {string} name - Name of radio element

 * @returns {JSX.Element} - Rendered component
 */

export const Radio = ({ options, labelText, name, ...rest }: IRadioProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <div className="mx-auto text-center w-64">
        <fieldset>
          <div className="block mt-4">
            <legend className="block mb-1 text-gray-600">{labelText}</legend>
          </div>
          {options.map((value: TOptionsValue) => (
            <Fragment key={value}>
              <div className="flex items-center mb-4">
                <input
                  type="radio"
                  value={value}
                  id={value}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  {...register(name)}
                  {...rest}
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

        {errors[name] && (
          <span className="text-red-500 text-xl p-2 block mt-2">
            {String(errors[name]?.message)}
          </span>
        )}
      </div>
    </>
  );
};
