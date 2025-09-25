export const mockContacts = [
    { id: "c1", name: "Alice Müller", phoneNumber: "+49 151 2345678", avatarUrl: "", totalCallCount: 12 },
    { id: "c2", name: "Bob Schneider", phoneNumber: "+49 171 9876543", avatarUrl: "", totalCallCount: 3 },
    { id: "c3", name: "Jisu Kim", phoneNumber: "+49 160 5550001", avatarUrl: "", totalCallCount: 2 },
];

export const mockCalls = [
    { id: "k1", contactId: "c1", phoneNumber: "+49 151 2345678", direction: "incoming" as const, startedAt: "2025-09-23T08:15:00Z", duration: 225 },
    { id: "k2", contactId: "c2", phoneNumber: "+49 171 9876543", direction: "outgoing" as const, startedAt: "2025-09-22T13:45:00Z", duration: 78 },
    { id: "k3", contactId: "c3", phoneNumber: "+49 160 5550001", direction: "missed" as const, startedAt: "2025-09-24T06:05:00Z", duration: 234 },
    { id: "k4", contactId: "unknown", phoneNumber: "+49 160 5550001", direction: "missed" as const, startedAt: "2025-09-24T06:05:00Z", duration: 234 },
];
