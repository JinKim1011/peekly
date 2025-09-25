import { designTokens } from "../../design-tokens";
import { CallItem } from "./CallItem";
import type { CallList as ContactListProps, ContactItem } from "../types";

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
        flex: '1 0 0'
    };

    return (
        <ul
            role="list"
            style={listStyle}
            className={className}
            aria-label={ariaLabel || 'Call List'}
            tabIndex={0}
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