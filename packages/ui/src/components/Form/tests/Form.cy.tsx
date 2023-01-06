/// <reference types="cypress" />

import Form from '../Form.component';

describe('<Form>', () => {
  it('mounts', () => {
    cy.mount(
      <Form
        onSubmit={() => {
          alert('Submit');
        }}
      >
        Form
      </Form>
    );
  });
  // TODO: Should add more tests here
});
