import { designTokens } from "../design-tokens";

export const listPaneStyle: React.CSSProperties = {
    display: 'flex',
    width: 420,
    flexDirection: 'column',
    alignSelf: 'stretch',
    borderRight: `${designTokens.border.width[1]} solid ${designTokens.colors.border.muted}`,
    flex: '0 0 auto',
};
