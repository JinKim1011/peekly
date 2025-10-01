import { Button } from "../components/common/Button";
import { ContactList } from "../components/contacts/ContactList";
import { mockContacts } from '../mocks/data';
import { useState } from 'react';
import { designTokens } from '../design-tokens';
import { ListPaneStyle } from '../styles/ListPane';
import { PageStyle } from "../styles/Page";
import { TitleWrapper } from "../components/common/TitleWrapper";
import { State } from "../components/common/State";



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

  const stateText =
    error ? 'Something went wrong. Please try again later'
      : loading ? 'Please wait...'
        : !selectedId ? 'No customer selected' : '';

  const selectedContact = contactsWithContact.find(contact => contact.id === selectedId);

  return (
    <div style={PageStyle}>
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
      <div style={{
        maxWidth: 400,
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column',
        flex: `1 0 0`,
        padding: `0 ${designTokens.spacing.l}`,
      }}>
        {error ? (
          <State variant="error" title={stateText} />
        ) : loading ? (
          <State variant="loading" title={stateText} />
        ) : selectedContact ? (
          <pre style={{
            ...designTokens.typography.micro,
            whiteSpace: 'pre-wrap',
          }}>
            {JSON.stringify(selectedContact, null, 2)}
          </pre>
        ) : (
          <State variant="empty" title={stateText} />
        )}
      </div>
    </div>
  );
}
