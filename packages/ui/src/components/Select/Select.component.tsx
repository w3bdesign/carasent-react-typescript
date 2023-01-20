import { useFormContext } from 'react-hook-form';

export interface ISelectProps {
  options: string[];
  labelText: string;
  name: string;
}

type TOptionsValue = string;

/**
 * Select component used for selecting data in form
 * @function Select
 * @param {string[]} options - Array of options 
 * @param {string} labelText - Label text for select
 * @param {string} name - Name of select element

 * @returns {JSX.Element} - Rendered component
 */

export const Select = ({ options, labelText, name, ...rest }: ISelectProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <label htmlFor={name} className="block mt-4">
      <span className="block mb-1 text-gray-600">{labelText}</span>
      <select id={name} className="w-64" {...register(name)} {...rest}>
        {options.map((value: TOptionsValue) => (
          <option value={value} key={value}>
            {value}
          </option>
        ))}
        {errors[name] && (
          <span className="text-red-600 text-xl p-2 block mt-2">
            {String(errors[name]?.message)}
          </span>
        )}
      </select>
    </label>
  );
};
