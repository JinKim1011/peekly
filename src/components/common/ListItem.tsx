import type React from 'react';
import type { ListItem as ListItemProps } from '../types';
import { designTokens } from '../../design-tokens';

export const ListItem = ({
    icon,
    imageSrc,
    text,
    subText,
    infoText,
    selected,
    ariaLabel,
    className,
    onClick
}: ListItemProps) => {

    const wrapperStyle: React.CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        gap: designTokens.spacing.xs,
        padding: designTokens.spacing.s,
        borderRadius: designTokens.border.radius.roundMd,
        cursor: 'pointer',
        userSelect: 'none',
        outline: 'none'
    };

    const mediaStyle: React.CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 32,
        height: 32,
        overflow: 'hidden'
    };

    const textWrapperStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        minWidth: 0, // to enable text truncation
    };

    const textStyle: React.CSSProperties = {
        ...designTokens.typography.body,
        color: designTokens.colors.glyph.default,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    };

    const subTextStyle: React.CSSProperties = {
        ...designTokens.typography.bodySmall,
        color: designTokens.colors.glyph.muted,
    };

    const infoTextStyle: React.CSSProperties = {
        ...designTokens.typography.micro,
        color: designTokens.colors.glyph.muted,
        flexShrink: 0,
    };

    return (
        <div
            onClick={onClick}
            style={{
                ...wrapperStyle,
                background: selected ? designTokens.colors.fill.tertiary : undefined
            }}
            className={className}

            // accessibility
            role={onClick ? 'button' : 'listitem'}
            tabIndex={onClick ? 0 : -1}
            aria-label={ariaLabel ?? text}
            aria-current={selected ? 'true' : undefined}
        >
            {(icon || imageSrc) && (
                <div style={mediaStyle}>
                    {icon && <span>{icon}</span>}
                    {imageSrc && <img src={imageSrc} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />}
                </div>
            )}
            <div style={textWrapperStyle}>
                <span style={textStyle}>{text}</span>
                {subText && <span style={subTextStyle}>{subText}</span>}
            </div>
            {infoText && <span style={infoTextStyle}>{infoText}</span>}
        </div>
    )
}
