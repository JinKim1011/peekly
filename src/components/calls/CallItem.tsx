import { designTokens } from '../../design-tokens';
import { PhoneOutgoing, PhoneIncoming, PhoneMissed } from 'lucide-react';
import { ListItem } from '../common/ListItem';
import type { CallItem as CallItemProps } from '../types'

const callTypeIconMap = {
    outgoing: <PhoneOutgoing size={20} strokeWidth={1.5} color={designTokens.colors.glyph.default} />,
    incoming: <PhoneIncoming size={20} strokeWidth={1.5} color={designTokens.colors.glyph.default} />,
    missed: <PhoneMissed size={20} strokeWidth={1.5} color={designTokens.colors.glyph.default} />
};

export function CallItem({
    callId,
    phoneNumber,
    callType,
    contactName,
    callTime,
    duration,
    selected,
    onClick
}: CallItemProps) {

    const isSelected = (typeof selected === 'string' ? callId === selected : selected === true);
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

    // Format date as DD.MM.YYYY HH:MM AM/PM
    const dateObj = new Date(callTime);
    const day = String(dateObj.getDate()).padStart(2, '0');
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    const year = dateObj.getFullYear();
    let hours12 = dateObj.getHours();
    const minutesStr = String(dateObj.getMinutes()).padStart(2, '0');
    const ampm = hours12 >= 12 ? 'PM' : 'AM';
    hours12 = hours12 % 12;
    hours12 = hours12 ? hours12 : 12;
    const formattedTime = `${day}.${month}.${year} · ${hours12}:${minutesStr}${ampm}`;
    const subText = formattedTime;

    const text = contactName?.name ?? phoneNumber;

    return (
        <ListItem
            icon={callTypeIconMap[callType]}
            text={text}
            subText={subText}
            selected={isSelected}
            infoText={infoText}
            onClick={onClick}
            ariaLabel={`Call with ${text} at ${formattedTime}${duration ? ` for ${infoText}` : ''}`}
        />
    );
}