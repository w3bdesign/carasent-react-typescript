import { ReactNode } from 'react';

import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  UseFormReturn,
} from 'react-hook-form';

export interface IFormProps<T extends FieldValues> {
  children: ReactNode | ReactNode[];
  onSubmit: SubmitHandler<T>;
  methods: UseFormReturn<T>;
}

/**
 * Form component with react hook form
 * @function Form
 * 
 * @param { ReactNode | ReactNode[]} children - Form children elements (input, select etc)
 * @param {SubmitHandler<T>} onSubmit - onSubmit handler for form, called with <T>
 * @param {UseFormReturn<T>} methods - methods for form, called with <T>
 * 
 * @typedef {{ type: T extends FieldValues; }} IFormProps<T>
 * @template {IFormProps} T - Pass in TFormInputs (the type of all of the form inputs)
 
 * @returns {JSX.Element} - Rendered component
 */

export const Form = <T extends FieldValues>({
  children,
  onSubmit,
  methods,
}: IFormProps<T>): JSX.Element => {
  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white rounded-lg px-6 py-6 shadow-lg mx-auto text-center"
      >
        {children}
      </form>
    </FormProvider>
  );
};
