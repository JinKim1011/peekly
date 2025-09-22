import { designTokens } from '../../design-tokens';
import { NavigationLink } from '../common/NavigationLink';
import type { NavItem, MainNavigation as MainNavigationProps } from '../types';

export const MainNavigation = ({
    logo,
    itemsPrimary,
    itemsSecondary,
    className,
    ariaLable = 'Main Navigation'
}: MainNavigationProps) => {
    ///navigation group wrapper style
    const navStyle = {
        display: 'flex',
        flexDirection: 'column' as const,
        boxSizing: 'border-box' as const,
        width: 314,
        height: '100%',
        gap: designTokens.spacing.m,
        padding: `${designTokens.spacing.l} ${designTokens.spacing.s}`,
        backgroundColor: designTokens.colors.fill.tertiary,
    }
    // logo wrapper style
    const logoStyle = {
        display: 'flex',
        alignItems: 'center',
        padding: `0 0 0 ${designTokens.spacing.s}`,
    }
    // navigation link wrapper style
    const listStyle = {
        padding: 0,
        display: 'flex',
        flexDirection: 'column' as const,
        listStyle: 'none' as const,
        gap: designTokens.spacing.xxxs,
    }

    // render a group of navigation links
    const renderNavGroup = (items: NavItem[], primary = false) => {
        return (
            <ul
                style={{
                    ...listStyle,
                    margin: primary ? '0' : 'auto 0 0'
                }}
            >
                {items.map((item) => (
                    <li key={item.to}>
                        <NavigationLink
                            to={item.to}
                            label={item.label}
                            icon={item.icon}
                        />
                    </li>
                ))}
            </ul>
        );
    }

    return (
        <nav
            className={className}
            style={navStyle}
            aria-label={ariaLable}
        >
            <div style={logoStyle}>{logo}</div>
            {renderNavGroup(itemsPrimary, true)}
            {itemsSecondary && itemsSecondary.length > 0 && renderNavGroup(itemsSecondary)}
        </nav>
    );
}
