export interface ContactRequest {
    contactId: number;
    phoneNumbers: string[];
}

export interface NewContactRequest {
    userID: number | undefined;
    name: string;
    surname: string;
    phoneNumbers: string[];
}
