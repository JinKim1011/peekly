import type { State as StateProps } from '../types'
import { Info, OctagonAlert, Coffee } from 'lucide-react';
import { designTokens } from '../../design-tokens';

export function State({
    variant,
    title,
    className,
}: StateProps) {

    const wrapperStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: `${designTokens.spacing.xl} 0`,
        gap: `${designTokens.spacing.s}`,
    }

    const icon =
        variant === 'loading' ? <Coffee size={32} strokeWidth={1.5} color={designTokens.colors.glyph.default} />
            : variant === 'error' ? <OctagonAlert size={32} strokeWidth={1.5} color={designTokens.colors.glyph.default} />
                : <Info size={32} strokeWidth={1.5} color={designTokens.colors.glyph.default} />;


    return (
        <div
            style={{ ...wrapperStyle }}
            className={className}
        >
            <div>{icon}</div>
            <div style={{ ...designTokens.typography.body }}>{title}</div>
        </div>
    )
}