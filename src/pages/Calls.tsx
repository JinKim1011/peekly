import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCalls, selectCallsLoading, selectCallsError } from '../store/calls/callsSelector';
import { selectContacts } from '../store/contacts/contactsSelectors';
import type { AppDispatch } from '../store';
import { fetchCalls } from '../store/calls/callsSlice';
import { fetchContacts } from '../store/contacts/contactsSlice';
import { CallList } from '../components/calls/CallList';
import { CallFilter } from '../components/calls/CallFilter';
import type { CallDirection, CallItem } from '../components/types';
import { TitleWrapper } from '../components/common/TitleWrapper';
import { State } from '../components/common/State';
import { ListPaneStyle } from '../styles/ListPane';
import { PageStyle } from "../styles/Page";
import { designTokens } from '../design-tokens';

export default function Calls() {
  const dispatch = useDispatch<AppDispatch>();
  const calls = useSelector(selectCalls);
  const loading = useSelector(selectCallsLoading);
  const error = useSelector(selectCallsError);

  const contacts = useSelector(selectContacts);

  const [selectedId, setSelectedId] = useState<string | undefined>(undefined);
  const [filterValue, setFilterValue] = useState<CallDirection>("all");

  useEffect(() => {
    dispatch(fetchCalls());
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredCalls = filterValue === "all"
    ? calls
    : calls.filter(call => call.direction === filterValue);

  const callItems: CallItem[] = filteredCalls.map(call => {
    const contact = contacts.find(c => c.id === call.contactId);
    return {
      callId: call.id,
      callType: call.direction,
      callTime: call.startedAt,
      phoneNumber: call.phoneNumber,
      duration: call.duration != null ? `${call.duration}` : undefined,
      contactName: contact
    };
  });

  const stateText =
    error ? 'Something went wrong. Please try again later'
      : loading ? 'Please wait...'
        : calls.length === 0 ? 'No call history found' : !selectedId ? 'No call history selected' : '';

  const selectedCall = calls.find(call => call.id === selectedId);

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
          calls={callItems}
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