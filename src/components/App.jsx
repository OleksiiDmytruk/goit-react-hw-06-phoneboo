import { ContactForm } from './ContactForm/ContactForm';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';

import { Section } from './Section/Section';
import { ContactList } from './ContactList/ContactList';
import { ContactFilter } from './ContactFilter/ContactFilter';

export const App = () => {
  return (
    <Layout>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <ContactFilter title="Find contacts by name" />
        <ContactList />
      </Section>
      <GlobalStyle />
    </Layout>
  );
};
