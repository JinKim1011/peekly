import { Button } from "../components/common/Button";
import { ContactList } from "../components/contacts/ContactList";
import { mockContacts } from '../mocks/data';
import { useState } from 'react';
import { designTokens } from '../design-tokens';
import { ListPaneStyle } from '../styles/ListPane';
import { PageStyle } from "../styles/Page";
import { TitleWrapper } from "../components/common/TitleWrapper";



export default function Contacts() {
  const [selectedId, setSelectedId] = useState<string | undefined>(undefined);
  const [loading] = useState(false);
  const [error] = useState<string | undefined>(undefined);

  const contactsWithContact = mockContacts.map(contact => {
    return {
      ...contact
    }
  })

  const buttonWrapperStyle: React.CSSProperties = {
    display: 'flex',
    padding: `${designTokens.spacing.s} ${designTokens.spacing.l} ${designTokens.spacing.l}`,
  }

  return (
    <div>
      <div style={ListPaneStyle}>
        <TitleWrapper
          title="Customers"
          titleSize="s"
          divider={false}
        />
        <div
          style={{
            ...buttonWrapperStyle
          }}>
          <Button
            variant="outlined"
            label="+ Add Customer"
            disabled={false}
            onClick={() => { }}
          />
        </div>
        <ContactList
          contacts={contactsWithContact}
          selectedContactId={selectedId}
          onContactSelect={setSelectedId}
          ariaLabel="Customer List"
          loading={loading}
          error={error}
        />
      </div>
    </div>
  );
}
