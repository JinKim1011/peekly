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