import { ReactNode } from 'react';

import { FormProvider, SubmitHandler, UseFormReturn } from 'react-hook-form';

type TFormInputs = {
  firstName: string;
  gender: string;
  food: 'pasta' | 'pizza' | 'hamburger';
};

export interface IFormProps {
  children: ReactNode | ReactNode[];
  onSubmit: SubmitHandler<TFormInputs>;

  methods: UseFormReturn<TFormInputs>;
}

/**
 * Form component with react hook form
 * @function Form
 * @param { ReactNode | ReactNode[]} children - Form children elements (input, select etc)
 * @param {SubmitHandler<TFormInputs>} onSubmit - onSubmit handler for form
 
 * @returns {JSX.Element} - Rendered component
 */

export const Form = ({
  children,
  onSubmit,
  methods,
}: IFormProps): JSX.Element => {
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
