export type Call = {
    id: string;
    contactId: string;
    direction: 'outgoing' | 'incoming' | 'missed';
    startedAt: string;
    duration?: number;
    phoneNumber: string;
}