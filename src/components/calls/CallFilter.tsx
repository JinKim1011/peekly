import type { CallFilter as CallFilterProps } from "../types";
import { FilterGroup } from "../common/FilterGroup.tsx";

const DIRECTION_OPTIONS = [
    { id: "all", label: "All" },
    { id: "incoming", label: "Incoming" },
    { id: "outgoing", label: "Outgoing" },
    { id: "missed", label: "Missed" },
] as const;

export function CallFilter({
    value,
    onChange,
    className,
    ariaLabel = "Filter calls"
}: CallFilterProps) {
    return (
        <FilterGroup
            options={[...DIRECTION_OPTIONS]}
            value={value}
            onChange={(id) => onChange(id as typeof DIRECTION_OPTIONS[number]["id"])}
            className={className}
            ariaLabel={ariaLabel}
        />
    );
}