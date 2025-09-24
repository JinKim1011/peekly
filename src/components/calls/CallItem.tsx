import { designTokens } from '../../design-tokens';
import { PhoneOutgoing, PhoneIncoming, PhoneMissed } from 'lucide-react';
import { ListItem } from '../common/ListItem';

const callTypeIconMap = {
    outgoing: <PhoneOutgoing size={16} strokeWidth={1.5} color={designTokens.colors.glyph.default} />,
    incoming: <PhoneIncoming size={16} strokeWidth={1.5} color={designTokens.colors.glyph.default} />,
    missed: <PhoneMissed size={16} strokeWidth={1.5} color={designTokens.colors.glyph.default} />
};

export function CallItem({
    callType,
    contact,
    callTime,
    duration,
    selected,
    onClick
}: {
    callType: 'outgoing' | 'incoming' | 'missed';
    contact: {
        name?: string;
        phoneNumber: string
    };
    callTime: string;
    duration?: string;
    selected?: boolean;
    onClick?: () => void;
}) {
    const durationNum = Number(duration);
    const hours = Math.floor(durationNum / 3600);
    const minutes = Math.round((durationNum % 3600) / 60);
    const infoText =
        duration != null
            ? [
                hours >= 1 ? `${hours} hours` : null,
                `${minutes} minutes`
            ].filter(Boolean).join(' ')
            : undefined;

    return (
        <ListItem
            icon={callTypeIconMap[callType]}
            text={contact?.name ?? contact?.phoneNumber}
            subText={new Date(callTime).toLocaleString()}
            infoText={infoText}
            selected={selected}
            onClick={onClick}
            ariaLabel={`Call with ${contact?.name ?? contact?.phoneNumber} at ${new Date(callTime).toLocaleString()} ${duration ? ` for ${infoText}` : ''}`}
        />
    );
}