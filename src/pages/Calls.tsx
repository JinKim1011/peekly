import { mockCalls, mockContacts } from '../mocks/data';
import { CallList } from '../components/calls/CallList';
import { useState } from 'react';
import { designTokens } from '../design-tokens';


export default function Calls() {
  const [selectedId, setSelectedId] = useState<string | undefined>(undefined);

  if (!mockCalls.length) {
    return <div>No calls found</div>;
  }

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

  return (
    <div style={{ display: 'flex', flexDirection: 'row', height: '100%' }}>
      <CallList
        calls={callsWithContact}
        selectedCallId={selectedId}
        onCallSelect={setSelectedId}
        className=""
        ariaLabel="Call History"
      />
      <div style={{
        maxWidth: 400,
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        flex: `1 0 0`,
        padding: `0 ${designTokens.spacing.l}`,
        borderLeft: `${designTokens.border.width[1]} solid ${designTokens.colors.border.muted}`,
      }}>
        <strong style={designTokens.typography.title3}>Selected Call Debug</strong>
        <pre style={{
          ...designTokens.typography.micro,
          whiteSpace: 'pre-wrap',
        }}>
          {selectedCall ? JSON.stringify(selectedCall, null, 2) : 'No call selected'}
        </pre>
      </div>
    </div>
  );
}