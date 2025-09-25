import { ListItem } from "../common/ListItem";
import type { ContactItem as ContactItemProps } from "../types";

export function ContactItem({
    contact,
    selected,
    onClick
}: ContactItemProps) {
    return (
        <ListItem
            text={contact.name}
            subText={contact.phoneNumber}
            infoText={contact.totalCallCount != null ? `${contact.totalCallCount} calls` : undefined}
            imageSrc={contact.avatarUrl}
            selected={selected}
            onClick={onClick}
            ariaLabel={`Contact ${contact.name}`}
        />
    );
}