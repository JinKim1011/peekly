import type { FilterChip as FilterChipProps } from '../types'
import { designTokens } from '../../design-tokens'

export function FilterChip({
    label,
    selected,
    onClick
}: FilterChipProps) {

    const wrapperStyle: React.CSSProperties = {
        display: 'inline-flex',
        padding: `${designTokens.spacing.xxs} ${designTokens.spacing.s}`,
        borderRadius: designTokens.border.radius.circle,
        background: designTokens.colors.fill.primary,
        border: `1px solid ${selected ? designTokens.colors.border.focus : designTokens.colors.border.default}`,
        color: selected ? designTokens.colors.glyph.focus : designTokens.colors.glyph.default,
        whiteSpace: 'nowrap',
        cursor: 'pointer',
        userSelect: 'none',
        ...designTokens.typography.body,
    }

    return (
        <button
            type='button'
            onClick={onClick}
            style={wrapperStyle}
            aria-pressed={selected}
            aria-label={label}
        >
            {label}
        </button>
    )
}