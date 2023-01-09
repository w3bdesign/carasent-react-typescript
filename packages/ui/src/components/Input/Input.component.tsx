import { useFormContext } from 'react-hook-form';

export type TInputProps = {
  name: string;
  placeholder?: string;
  labelText: string;
}

/**
 * Input component used for form input fields
 * @function Input
 * @param {string} name - Name text value for input
 * @param {string} placeholder - Placeholder text value for input
 * @param {string} labelText - Label text  for field
 
 * @returns {JSX.Element} - Rendered component
 */

export const Input = ({
  name,
  placeholder,
  labelText,
}: TInputProps): JSX.Element => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const inputHasErrors = errors[name] ? true : false;

  return (
    <>
      <label htmlFor={name} className="block mt-4">
        <span className="block mb-1 text-gray-600">{labelText}</span>
        <input
          placeholder={placeholder}
          className="w-64 px-4 py-2 mt-2 text-base bg-white border border-gray-400 rounded focus:outline-none focus:border-black"
          id={name}
          aria-invalid={inputHasErrors}
          {...register(name)}
        />
        {errors[name as string] && (
          <span className="text-red-500 text-xl p-2 block mt-2">
            {String(errors[name]?.message)}
          </span>
        )}
      </label>
    </>
  );
};
