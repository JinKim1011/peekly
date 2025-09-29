import type { FilterGroup as FilterGroupProps } from '../types'
import { designTokens } from '../../design-tokens'
import { FilterChip } from './FilterChip'

export function FilterGroup({
    options,
    value,
    onChange,
    className,
    ariaLabel = 'Filter options'
}: FilterGroupProps) {

    const wrapperStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
        gap: designTokens.spacing.xxs,
        padding: `${designTokens.spacing.s} ${designTokens.spacing.l} ${designTokens.spacing.l}`,
    }

    return (
        <div
            role="radiogroup"
            style={{ ...wrapperStyle }}
            aria-label={ariaLabel}
            className={className}
        >
            {options.map((opt) => {

                const selected = value === opt.id;

                return (
                    <div
                        key={opt.id}
                        tabIndex={0}
                        aria-checked={selected}
                        role="radio"

                        onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                                e.preventDefault();
                                onChange(opt.id);
                            }
                        }}
                        onClick={() => onChange(opt.id)}

                    >
                        <FilterChip
                            label={opt.label}
                            selected={selected}
                            onClick={() => onChange(opt.id)}
                        />
                    </div>
                )
            })}
        </div>
    )
}