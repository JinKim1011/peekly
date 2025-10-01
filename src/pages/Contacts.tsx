import { Button } from "../components/common/Button";
import { ContactList } from "../components/contacts/ContactList";
import { mockContacts } from '../mocks/data';
import { useState } from 'react';
import { designTokens } from '../design-tokens';
import { listPaneStyle } from '../styles/ListPane';



export default function Contacts() {
  const [selectedId, setSelectedId] = useState<string | undefined>(undefined);
  const [loading] = useState(false);
  const [error] = useState<string | undefined>(undefined);

  const contactsWithContact = mockContacts.map(contact => {
    return {
      ...contact
    }
  })

  return (
    <div style={listPaneStyle}>
      <Button
        variant="outlined"
        label="+ Add Customer"
        disabled={false}
        onClick={() => { }}
      />
      <ContactList
        contacts={contactsWithContact}
        selectedContactId={selectedId}
        onContactSelect={setSelectedId}
        ariaLabel="Customer List"
        loading={loading}
        error={error}
      ></ContactList>
    </div >
  );
}
