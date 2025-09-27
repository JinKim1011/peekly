import type React from "react";
import type { ReactNode } from "react";

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
    imageSrc?: string;
    text: string;
    subText?: string;
    infoText?: string;
    selected?: boolean;
    onClick?: () => void;
    ariaLabel?: string;
    className?: string;
}

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

export type ContactItem = {
    contact: {
        name: string,
        phoneNumber: string,
        id: string,
        avatarUrl?: string,
        totalCallCount?: number
    };
    selected?: boolean;
    onClick?: () => void;
};

export type CallList = {
    calls: CallItem[];
    selectedCallId?: string;
    onCallSelect?: (callId: string) => void;
    className?: string;
    ariaLabel?: string;
}

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