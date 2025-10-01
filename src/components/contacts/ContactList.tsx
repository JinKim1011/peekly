import { designTokens } from '../../design-tokens';
import { ContactItem } from './ContactItem';
import type { ContactList as ContactListProps } from '../types';
import { State } from '../common/State';

export function ContactList({
    contacts,
    selectedContactId,
    onContactSelect,
    className,
    ariaLabel,
    loading,
    error
}: ContactListProps) {

    const stateText =
        error ? 'Something went wrong. Please try again later'
            : loading ? 'Please wait...'
                : !contacts.length ? 'No contacts found' : '';

    if (error) {
        return <State variant="error" title={stateText} />;
    } if (loading) {
        return <State variant="loading" title={stateText} />;
    } if (!contacts.length) {
        return <State variant="empty" title={stateText} />;
    }

    const listStyle: React.CSSProperties = {
        listStyle: "none",
        margin: 0,
        padding: `0 ${designTokens.spacing.xxs}`,
        display: 'flex',
        flexDirection: 'column',
        gap: designTokens.spacing.xxxs,
        flex: '1 0 0',
    };

    return (
        <ul
            role='list'
            style={listStyle}
            className={className}
            aria-label={ariaLabel || 'Consumer List'}
            tabIndex={0}
        >
            {contacts.map(contact => (
                <ContactItem
                    key={contact.id}
                    contact={contact}
                    selected={contact.id === selectedContactId}
                    onClick={() => onContactSelect?.(contact.id)}
                />
            ))}
        </ul>
    );
}