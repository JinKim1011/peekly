import type { Button as ButtonProps } from '../types';
import { designTokens } from '../../design-tokens';

export function Button({
    variant,
    label,
    onClick,
    disabled = false,
    className
}: ButtonProps) {

    const baseStyle: React.CSSProperties = {
        ...designTokens.typography.body,
        padding: `${designTokens.spacing.xs} ${designTokens.spacing.s}`,
        borderRadius: `${designTokens.border.radius.roundMd}`,
        cursor: disabled ? 'not-allowed' : 'pointer',
        border: 'none',
        outline: 'none',
        transition: 'background-color 0.25s, color 0.25s, border 0.25s',
        display: 'inline-block',
        textAlign: 'center',
        userSelect: 'none',
    };

    const variantStyles: { [key in ButtonProps['variant']]: React.CSSProperties } = {
        primary: {
            backgroundColor: disabled ? designTokens.colors.glyph.muted : designTokens.colors.glyph.default,
            color: designTokens.colors.fill.primary,
        },
        secondary: {
            backgroundColor: designTokens.colors.fill.tertiary,
            color: disabled ? designTokens.colors.glyph.muted : designTokens.colors.glyph.default,
        },
        void: {
            backgroundColor: 'transparent',
            color: disabled ? designTokens.colors.glyph.muted : designTokens.colors.glyph.default,
        },
        outlined: {
            backgroundColor: 'transparent',
            color: disabled ? designTokens.colors.glyph.muted : designTokens.colors.glyph.default,
            border: disabled ? `${designTokens.border.width[1]} solid ${designTokens.colors.border.muted}` : `${designTokens.border.width[1]} solid ${designTokens.colors.border.default}`,
        },
    };

    return (
        <button
            style={{
                ...baseStyle,
                ...variantStyles[variant],
                opacity: disabled ? 0.5 : 1
            }}
            onClick={disabled ? undefined : onClick}
            className={className}
        >
            {label}
        </button>
    )
}