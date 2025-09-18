import { Link, useLocation } from 'react-router-dom';
import type { ReactNode } from 'react';
import { designTokens } from '../../design-tokens';

type NavigationLinkProps = {
    to: string;
    label: string;
    icon: ReactNode;
    className?: string;
};

export const NavigationLink = ({ to, label, icon, className }: NavigationLinkProps) => {
    const location = useLocation();
    const isActive = location.pathname === to;

    return (
        <Link
            to={to}
            className={className}
            style={{
                display: 'flex',
                alignItems: 'center',
                padding: `${designTokens.spacing.xs} ${designTokens.spacing.xxs}`,
                borderRadius: designTokens.border.radius.roundSm,
                gap: designTokens.spacing.xxs,
                backgroundColor: isActive ? designTokens.colors.fill.secondarySelected : 'transparent',
            }}
            aria-current={isActive ? 'page' : undefined}>
            {icon && <span style={{
                display: 'flex',
                justifyContent: 'center',
                width: 38
            }}>{icon}</span>}
            <span style={{
                ...designTokens.typography.body,
                color: designTokens.colors.glyph.default
            }}>{label}</span>
        </Link >
    )
}