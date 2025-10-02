import { useState, useEffect } from 'react';
import { CallList } from '../components/calls/CallList';
import { CallFilter } from '../components/calls/CallFilter';
import type { CallDirection } from '../components/types';
import { TitleWrapper } from '../components/common/TitleWrapper';
import { State } from '../components/common/State';
import { ListPaneStyle } from '../styles/ListPane';
import { PageStyle } from "../styles/Page";
import { designTokens } from '../design-tokens';

export default function Calls() {
  const [calls, setCalls] = useState<any[]>([]);
  const [selectedId, setSelectedId] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | undefined>(undefined);
  const [filterValue, setFilterValue] = useState<CallDirection>("all");

  useEffect(() => {
    setLoading(true);
    Promise.all([
      fetch('/api/calls'),
      fetch('/api/contacts')
    ])
      .then(async ([callsResponse, contactsResponse]) => {
        if (!callsResponse.ok) {
          throw new Error("Calls fetch failed");
        }
        if (!contactsResponse.ok) {
          throw new Error("Contacts fetch failed");
        }
        const calls = await callsResponse.json();
        const contacts = await contactsResponse.json();
        return { calls, contacts };
      })
      .then((data) => {
        const callsWithType = data.calls.map((call: any) => {
          const foundContact = data.contacts.find((contact: any) => contact.id === call.contactId);
          return {
            ...call,
            callType: call.direction,
            callTime: call.startedAt,
            duration: call.duration != null ? `${call.duration}` : undefined,
            contactName: foundContact,
            phoneNumber: call.phoneNumber,
            callId: call.id
          };
        });
        setCalls(callsWithType);
        setError(undefined);
      })
      .catch(() => setError("Failed to load calls"))
      .finally(() => setLoading(false));
  }, []);

  const stateText =
    error ? 'Something went wrong. Please try again later'
      : loading ? 'Please wait...'
        : calls.length === 0 ? 'No call history found' : !selectedId ? 'No call history selected' : '';

  const selectedCall = calls.find(call => call.id === selectedId);

  const filteredCalls = filterValue === "all"
    ? calls
    : calls.filter(call => call.direction === filterValue);

  function handleFilterChange(id: CallDirection) {
    setFilterValue(id);
    setSelectedId(undefined);
  }

  if (loading) return <State variant='loading' title={stateText} />;
  if (error) return <State variant='error' title={stateText} />;
  if (calls.length === 0) return <State variant='empty' title={stateText} />;

  return (
    <div style={PageStyle}>
      <div style={ListPaneStyle}>
        <TitleWrapper
          title="Recents"
          titleSize="s"
          divider={false}
        />
        <CallFilter
          value={filterValue}
          onChange={(id) => {
            console.log('Filter changed to:', id);
            handleFilterChange(id);
          }}
          ariaLabel="Filter calls by direction"
        />
        <CallList
          calls={filteredCalls}
          selectedCallId={selectedId}
          onCallSelect={setSelectedId}
          ariaLabel="Call History"
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
        ) : selectedCall ? (
          <pre style={{
            ...designTokens.typography.micro,
            whiteSpace: 'pre-wrap',
          }}>
            {JSON.stringify(selectedCall, null, 2)}
          </pre>
        ) : (
          <State variant="empty" title={stateText} />
        )}
      </div>
    </div>
  );
}