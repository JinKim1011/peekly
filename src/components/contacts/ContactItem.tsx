import { ListItem } from "../common/ListItem";

export function ContactItem({
    contact,
    selected,
    onClick
}: {
    contact: {
        name: string,
        phoneNumber: string,
        id: string,
        avatarUrl?: string,
        totalCallCount?: number
    };
    selected?: boolean;
    onClick?: () => void;
}) {

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