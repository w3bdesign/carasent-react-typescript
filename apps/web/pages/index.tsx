import { useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import Head from 'next/head';

import { Button, Character, Header, Input, Form, Radio, Select } from 'ui';

type TFormSchemaType = z.infer<typeof formSchema>;

export const formSchema = z.object({
  firstName: z.string().min(1, { message: 'Field is required' }),
  gender: z.string().min(1, { message: 'Field is required' }),
  food: z.string().min(1, { message: 'Field is required' }),
});

export default function Home() {
  const onSubmit: SubmitHandler<TFormSchemaType> = (data) =>
    setformContent(data);

  const [formContent, setformContent] = useState<TFormSchemaType>();

  return (
    <div>
      <Head>
        <title>Carascent - React / Typescript oppgave</title>
        <meta
          name="description"
          content="Carascent - React / Typescript oppgave"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="bg-gray-100 min-h-screen">
          <div className="max-w-2xl w-full mx-auto px-4 py-16">
            <Header title="Carascent - React / Typescript oppgave" />
            <Character id={2} />
            <Form onSubmit={onSubmit}>
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
