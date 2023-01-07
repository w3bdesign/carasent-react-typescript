import { ReactNode } from 'react';
import { z } from 'zod';
import {
  FormProvider,
  SubmitHandler,
  useForm,
  FieldValues,
} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

export interface IFormProps {
  children: ReactNode;
  onSubmit: SubmitHandler<any>;
  formSchema: z.Schema<FieldValues>;
}

/**
 * Form component with react hook form
 * @function Form
 * @param {ReactNode} children - Form children elements (input, select etc)
 * @param {SubmitHandler<TFormSchemaType>} onSubmit - onSubmit handler for form
 
 * @returns {JSX.Element} - Rendered component
 */

export const Form = ({
  children,
  onSubmit,
  formSchema,
}: IFormProps): JSX.Element => {
  const methods = useForm({
    resolver: zodResolver(formSchema),
  });
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
