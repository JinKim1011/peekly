import { ListItem } from "../common/ListItem";
import type { ContactItem as ContactItemProps } from "../types";

export function ContactItem({
    contact,
    selected,
    onClick,
}: ContactItemProps) {

    const isSelected = (typeof selected === 'string' ? contact.id === selected : selected === true);

    return (
        <ListItem
            text={contact.name}
            subText={contact.phoneNumber}
            infoText={contact.totalCallCount != null ? `${contact.totalCallCount}` : undefined}
            selected={isSelected}
            onClick={onClick}
            ariaLabel={`Contact ${contact.name}`}
        />
    );
}