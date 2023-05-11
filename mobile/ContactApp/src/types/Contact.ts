import { PhoneNumber } from "./PhoneNumber";

export interface Contact {
    id: number;
    name: string;
    surname: string;
    userId: number;
    phoneNumbers: PhoneNumber[];
    createdAt: Date;
    updatedAt: Date;
}
