import type React from 'react';
import type { TitleWrapper as TitleWrapperProps } from "../types";
import { designTokens } from "../../design-tokens";
import { Divider } from './Divider';


export const TitleWrapper = ({
    title,
    titleSize,
    divider,
    className
}: TitleWrapperProps) => {

    const containerStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        padding: ` ${designTokens.spacing.l} ${designTokens.spacing.l} 0`,
    };

    const titleSizeMap = {
        l: designTokens.typography.title1,
        m: designTokens.typography.title2,
        s: designTokens.typography.title3,
    };

    return (
        <div
            style={containerStyle}
        >
            <span
                className={className}
                style={titleSizeMap[titleSize]}>
                {title}
            </span>
            {divider && <Divider
                direction="horizontal"
                spacing="m"
                color={designTokens.colors.border.default}
                width={designTokens.border.width[1]}
            />}
        </div>
    )
}