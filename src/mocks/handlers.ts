import { http, HttpResponse, delay } from 'msw';
import { mockCalls, mockContacts } from './data';

const RETURN_EMPTY = false;
const RETURN_ERROR = false;
const RETURN_DELAY = 500;

export const handlers = [
    http.get("api/contacts", async () => {
        await delay(RETURN_DELAY);
        if (RETURN_ERROR) {
            return HttpResponse.json({ message: "Failed to load contacts" }, { status: 500 });
        }
        if (RETURN_EMPTY) {
            return HttpResponse.json([], { status: 200 });
        }
        return HttpResponse.json(mockContacts, { status: 200 });
    }),

    http.get("api/calls", async () => {
        await delay(RETURN_DELAY);
        if (RETURN_ERROR) {
            return HttpResponse.json({ message: "Failed to load calls" }, { status: 500 });
        }
        if (RETURN_EMPTY) {
            return HttpResponse.json([], { status: 200 });
        }
        return HttpResponse.json(mockCalls, { status: 200 });
    })
];