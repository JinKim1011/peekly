import { mockCalls, mockContacts } from '../mocks/data';
import { CallList } from '../components/calls/CallList';
import { CallFilter } from '../components/calls/CallFilter';
import { useState } from 'react';
import { designTokens } from '../design-tokens';
import { TitleWrapper } from '../components/common/TitleWrapper';
import { State } from '../components/common/State';
import type { CallDirection } from '../components/types';
import { ListPaneStyle } from '../styles/ListPane';
import { PageStyle } from "../styles/Page";


export default function Calls() {
  const [selectedId, setSelectedId] = useState<string | undefined>(undefined);
  const [loading] = useState(false);
  const [error] = useState<string | undefined>(undefined);

  const stateText =
    error ? 'Something went wrong. Please try again later'
      : loading ? 'Please wait...'
        : !selectedId ? 'No call history selected' : '';

  const callsWithContact = mockCalls.map(call => {
    const contact = mockContacts.find(c => c.id === call.contactId);
    return {
      ...call,
      callType: call.direction,
      callTime: call.startedAt,
      duration: call.duration != null ? `${call.duration}` : undefined,
      contactName: contact ? contact : undefined,
      phoneNumber: call.phoneNumber,
      callId: call.id
    };
  });

  const selectedCall = callsWithContact.find(call => call.callId === selectedId);

  const [filterValue, setFilterValue] = useState<CallDirection>("all");

  function handleFilterChange(id: CallDirection) {
    setFilterValue(id);
    setSelectedId(undefined);
  }

  const filteredCalls = filterValue === "all"
    ? callsWithContact
    : callsWithContact.filter(call => call.callType === filterValue);

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