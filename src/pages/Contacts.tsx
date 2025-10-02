import { useState, useEffect } from 'react';
import { ContactList } from "../components/contacts/ContactList";
import { TitleWrapper } from "../components/common/TitleWrapper";
import { State } from "../components/common/State";
import { Button } from "../components/common/Button";
import { ListPaneStyle } from '../styles/ListPane';
import { PageStyle } from "../styles/Page";
import { designTokens } from '../design-tokens';

export default function Contacts() {
  const [contacts, setContacts] = useState<any[]>([]);
  const [selectedId, setSelectedId] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | undefined>(undefined);

  useEffect(() => {
    setLoading(true);
    fetch('/api/contacts')
      .then(async (response) => {
        if (!response.ok) {
          throw new Error("Contacts fetch failed");
        }
        return response.json();
      })
      .then((data) => {
        setContacts(data);
        setError(undefined);
      })
      .catch(() => setError("Failed to load contacts"))
      .finally(() => setLoading(false));
  }, []);

  const stateText =
    error ? 'Something went wrong. Please try again later'
      : loading ? 'Please wait...'
        : contacts.length === 0 ? 'No contacts found' : !selectedId ? 'No customer selected' : '';

  if (loading) return <State variant="loading" title={stateText} />;
  if (error) return <State variant="error" title={stateText} />;
  if (contacts.length === 0) return <State variant="empty" title={stateText} />;

  const selectedContact = contacts.find(contact => contact.id === selectedId);

  const buttonWrapperStyle: React.CSSProperties = {
    display: 'flex',
    padding: `${designTokens.spacing.s} ${designTokens.spacing.l} ${designTokens.spacing.l}`,
  };

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
          contacts={contacts}
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
        {selectedContact ? (
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
