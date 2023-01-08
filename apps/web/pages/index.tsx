import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Head from 'next/head';

import { Button, Character, Header, Input, Form, Radio, Select } from 'ui';

type TFormSchemaType = z.infer<typeof formSchema>;

type TFormInputs = {
  firstName: string;
  gender: string;
  food: 'pasta' | 'pizza' | 'hamburger';
};

const formSchema = z.object({
  firstName: z.string().min(1, { message: 'Du må fylle ut dette feltet' }),
  gender: z.string().min(1, { message: 'Du må fylle ut dette feltet' }),
  food: z.enum(['pasta', 'pizza', 'hamburger'], {
    errorMap: () => ({ message: 'Du må velge et alternativ' }),
  }),
});

export default function Home() {
  const onSubmit = (data: TFormInputs) => setformContent(data);

  const methods = useForm<TFormInputs>({
    resolver: zodResolver(formSchema),
  });

  const [formContent, setformContent] = useState<TFormSchemaType>();

  return (
    <div>
      <Head>
        <title>Carasent - React / Typescript oppgave</title>
        <meta
          name="description"
          content="Carasent - React / Typescript oppgave"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="bg-gray-100 min-h-screen">
          <div className="max-w-2xl w-full mx-auto px-4 py-16">
            <Header title="Carasent - React / Typescript oppgave" />
            <Character id={2} />
            <Form<TFormInputs> onSubmit={onSubmit} methods={methods}>
              <Input name="firstName" labelText="Navn" />
              <Select
                name="gender"
                labelText="Kjønn"
                options={['kvinne', 'mann', 'annet']}
              />
              <Radio
                options={['pasta', 'pizza', 'hamburger']}
                labelText={'Favorittrett'}
                name="food"
              />
              <Button variant="primary" type="submit">
                Send
              </Button>
              <Button variant="secondary" type="reset">
                Tøm skjema
              </Button>
            </Form>
            {formContent && (
              <section className="bg-white rounded-lg px-6 py-6 shadow-lg mt-4">
                <span className="block p-4">
                  <h2 className="text-xl font-bold text-center">Form data:</h2>
                  <span className="mt-4 block">
                    {JSON.stringify(formContent)}
                  </span>
                </span>
              </section>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
