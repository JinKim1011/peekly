import React from "react";
import type { Divider as DividerProps } from '../types';
import { designTokens } from "../../design-tokens";

export const Divider = ({
    direction,
    color,
    width,
    spacing
}: DividerProps) => {

    const directionMap: { [key in DividerProps['direction']]: React.CSSProperties } = {
        horizontal: {
            display: 'flex',
            flexDirection: 'column',
            flex: '0 1 0',
            height: 1
        },
        vertical: {
            display: 'flex',
            flex: '1 0 0',
            width: 1
        }
    }

    const spacingMap = {
        l: designTokens.spacing.s,
        m: designTokens.spacing.m,
        s: designTokens.spacing.s,
        xs: designTokens.spacing.xs,
        xxs: designTokens.spacing.xxs
    }

    return (
        <div
            style={{
                ...directionMap[direction || 'horizontal'],
                backgroundColor: color || designTokens.colors.border.default,
                width: (direction === 'horizontal' ? '100%' : `${width}`) || `${designTokens.border.width[1]}`,
                height: (direction === 'horizontal' ? `${width}` : '100%') || `${designTokens.border.width[1]}`,
                margin: direction === 'horizontal'
                    ? `${spacingMap[spacing || 'm']} 0`
                    : `0 ${spacingMap[spacing || 'm']}`
            }}>

        </div>
    )
}