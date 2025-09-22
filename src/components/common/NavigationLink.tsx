import { Link, useLocation } from 'react-router-dom';
import { designTokens } from '../../design-tokens';
import type { NavigationLink as NavigationLinkProps } from '../types'

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