import { designTokens } from "../../design-tokens";
import { CallItem } from "./CallItem";
import type { CallList as ContactListProps, ContactItem } from "../types";
import { useCallback } from "react";

export function CallList({
    calls,
    selectedCallId,
    onCallSelect,
    className,
    ariaLabel,
}: ContactListProps & { contact?: ContactItem['contact'] }) {

    const listStyle: React.CSSProperties = {
        listStyle: "none",
        margin: 0,
        padding: `0 ${designTokens.spacing.xxs}`,
        display: 'flex',
        flexDirection: 'column',
        gap: designTokens.spacing.xxxs,
        flex: '1 0 0',
    };

    const handleKeyDown = useCallback((event: React.KeyboardEvent<HTMLUListElement>) => {
        if (!calls.length || !onCallSelect) return;

        const index = selectedCallId
            ? calls.findIndex(call => call.callId === selectedCallId)
            : -1;

        if (event.key === 'ArrowDown') {
            const nextIndex = index < calls.length - 1 ? index + 1 : 0;
            onCallSelect(calls[nextIndex].callId);
            event.preventDefault();
        } else if (event.key === 'ArrowUp') {
            const prevIndex = index > 0 ? index - 1 : calls.length - 1;
            onCallSelect(calls[prevIndex].callId);
            event.preventDefault();
        }
    }, [calls, selectedCallId, onCallSelect]);

    return (
        <ul
            role="list"
            style={listStyle}
            className={className}
            aria-label={ariaLabel || 'Call List'}
            tabIndex={0}
            onKeyDown={handleKeyDown}
        >
            {calls.map(call => {

                return (
                    <CallItem
                        callId={call.callId}
                        callType={call.callType}
                        callTime={call.callTime}
                        phoneNumber={call.phoneNumber}
                        contactName={call.contactName}
                        duration={call.duration}
                        selected={call.callId === selectedCallId}
                        onClick={() => onCallSelect?.(call.callId)}
                    />
                );
            })}
        </ul>
    );
}