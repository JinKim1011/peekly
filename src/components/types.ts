import type React from "react";
import type { ReactNode } from "react";


// Call props
export type CallItem = {
    callId: string;
    callType: 'outgoing' | 'incoming' | 'missed';
    callTime: string;
    phoneNumber: string;
    contactName?: ContactItem['contact'];
    duration?: string;
    selected?: boolean;
    onClick?: () => void;
};
export type CallList = {
    calls: CallItem[];
    selectedCallId?: string;
    onCallSelect?: (callId: string) => void;
    className?: string;
    ariaLabel?: string;
    loading: boolean;
    error?: string;
}
export const CALL_DIRECTION = ['all', 'missed', 'incoming', 'outgoing'] as const;
export type CallDirection = typeof CALL_DIRECTION[number];
export type CallFilter = {
    value: CallDirection;
    onChange: (value: CallDirection) => void;
    className?: string;
    ariaLabel?: string;
}

// Contact props
export type ContactItem = {
    contact: {
        name: string;
        phoneNumber: string;
        id: string;
        totalCallCount?: number;
    };
    selected?: boolean;
    onClick?: () => void;
};
export type ContactList = {
    contacts: ContactItem['contact'][];
    selectedContactId?: string;
    onContactSelect?: (contactId: string) => void;
    className?: string;
    ariaLabel?: string;
    loading: boolean;
    error?: string;
}

// Common props
export type TitleWrapper = {
    title: string;
    titleSize: `l` | `m` | `s`;
    divider?: boolean;
    className?: string;
};
export type Divider = {
    direction: `horizontal` | `vertical`;
    spacing: `l` | `m` | `s` | `xs` | `xxs`;
    color: string;
    width: string;
}
export type FilterChip = {
    label: string;
    selected?: boolean;
    ariaLabel?: string;
    onClick?: () => void;
    className?: string;
}
export type FilterGroupOption = {
    id: string;
    label: string;
}
export type FilterGroup = {
    options: FilterGroupOption[];
    value: string;
    onChange: (value: string) => void;
    className?: string;
    ariaLabel?: string;
}
export type State = {
    variant: 'empty' | 'loading' | 'error';
    title: string;
    icon?: React.ReactNode;
    className?: string;
}
export type Button = {
    variant: 'primary' | 'secondary' | 'void' | 'outlined';
    label: string;
    onClick: () => void;
    disabled?: boolean;
    className?: string;
}
export type NavItem = {
    to: string;
    label: string;
    icon?: React.ReactNode;
    disabled?: boolean; // for the feature that are not avaialbe yet
    external?: boolean; // wheter the link is external link
    target?: "_blank" | "_self"; // for external link targert, opens in new tab or same tab
};

export type MainNavigation = {
    logo: ReactNode;
    itemsPrimary: NavItem[];
    itemsSecondary?: NavItem[];
    className?: string;
    ariaLable?: string;
}

export type NavigationLink = {
    to: string;
    label: string;
    icon: ReactNode;
    className?: string;
}

export type ListItem = {
    icon?: React.ReactNode;
    text: string;
    subText?: string;
    infoText?: string;
    selected?: boolean;
    onClick?: () => void;
    ariaLabel?: string;
    className?: string;
}