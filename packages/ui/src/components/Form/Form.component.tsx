import { ReactNode } from 'react';
import { z } from 'zod';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

type TFormSchemaType = z.infer<typeof formSchema>;

const formSchema = z.object({
  firstName: z.string().min(1, { message: 'Du må fylle ut dette feltet' }),
  gender: z.string().min(1, { message: 'Du må fylle ut dette feltet' }),
  food: z.enum(['pasta', 'pizza', 'hamburger'], {
    errorMap: () => ({ message: 'Du må velge et alternativ' }),
  }),
});

export interface IFormProps {
  children: ReactNode;
  onSubmit: SubmitHandler<TFormSchemaType>;
}

/**
 * Form component with react hook form
 * @function Form
 * @param {ReactNode} children - Form children elements (input, select etc)
 * @param {SubmitHandler<TFormSchemaType>} onSubmit - onSubmit handler for form
 
 * @returns {JSX.Element} - Rendered component
 */

export const Form = ({ children, onSubmit }: IFormProps): JSX.Element => {
  const methods = useForm<TFormSchemaType>({
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
