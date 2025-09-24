import type React from 'react';
import type { ListItem as ListItemProps } from '../types';
import { designTokens } from '../../design-tokens';

export const ListItem = ({
    icon,
    imageSrc,
    text,
    subText,
    infoText,
    selected = false,
    onClick,
    ariaLabel,
    className
}: ListItemProps) => {

    const wrapperStyle: React.CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        gap: designTokens.spacing.xs,
        padding: designTokens.spacing.s,
        borderRadius: designTokens.border.radius.roundMd,
        cursor: onClick ? 'pointer' : 'default',
        background: selected ? designTokens.colors.fill.tertiary : undefined,
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

    // keyboard activation for accessibility
    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (onClick && (e.key === "Enter" || e.key === " ")) {
            e.preventDefault();
            onClick();
        }
    };

    // focus outlined style
    const applyFocusOutlined = (el: HTMLDivElement) => {
        el.style.boxShadow = `0 0 0 ${designTokens.border.width[1]} ${designTokens.colors.border.focus}`;
    };
    const removeFocusOutlined = (el: HTMLDivElement) => {
        el.style.boxShadow = "none";
    };

    return (
        <div
            onClick={onClick}
            style={wrapperStyle}
            className={className}

            // accessibility
            role={onClick ? 'button' : 'listitem'}
            tabIndex={onClick ? 0 : -1}
            aria-label={ariaLabel ?? text}
            aria-current={selected ? 'true' : undefined}

            // keyboard and focus handling
            onKeyDown={handleKeyDown}
            onFocus={(e) => applyFocusOutlined(e.currentTarget)}
            onBlur={(e) => removeFocusOutlined(e.currentTarget)}
            onMouseEnter={(e) => {
                if (!selected) {
                    e.currentTarget.style.backgroundColor = designTokens.colors.fill.tertiary;
                }
            }}
            onMouseLeave={(e) => {
                if (!selected) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                }
            }}
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
