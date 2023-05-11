import { Contact } from "../../types/Contact";

export const SET_USER_CONTACTS = "SET_USER_CONTACTS";
export const SET_USER_CONTACTS_SUCCESS = "SET_USER_CONTACTS_SUCCESS";
export const SET_USER_CONTACTS_ERROR = "SET_USER_CONTACTS_ERROR";
export const CONTACTS_LOADING = "CONTACTS_LOADING";
export const SET_CONTACT_DETAILS = "SET_CONTACT_DETAILS";
export const ADD_NEW_CONTACT = "ADD_NEW_CONTACT";
export const ADD_NEW_CONTACT_SUCCESS = "ADD_NEW_CONTACT_SUCCESS";
export const ADD_NEW_CONTACT_ERROR = "ADD_NEW_CONTACT_ERROR";
export const ADD_NEW_NUMBERS_TO_CONTACT = "ADD_NEW_NUMBER_TO_CONTACT";
export const ADD_NEW_NUMBERS_TO_CONTACT_SUCCESS = "ADD_NEW_NUMBERS_TO_CONTACT_SUCCESS";
export const ADD_NEW_NUMBERS_TO_CONTACT_ERROR = "ADD_NEW_NUMBERS_TO_CONTACT_ERROR";

export interface ContactStore {
    contacts: Contact[] | null;
    contactDetails: Contact | null;
    loading: boolean;
    error: string | null;
}

export interface SetUserContactsAction {
    type: typeof SET_USER_CONTACTS;
}
export interface SetUserContactsSuccessAction {
    type: typeof SET_USER_CONTACTS_SUCCESS;
    payload: Contact[];
}
export interface SetUserContactsErrorAction {
    type: typeof SET_USER_CONTACTS_ERROR;
    payload: string;
}
export interface ContactsLoadingAction {
    type: typeof CONTACTS_LOADING;
    payload: boolean;
}
export interface SetContactDetailsAction {
    type: typeof SET_CONTACT_DETAILS;
    payload: Contact;
}
export interface AddNewContactAction {
    type: typeof ADD_NEW_CONTACT;
}
export interface AddNewContactSuccessAction {
    type: typeof ADD_NEW_CONTACT_SUCCESS;
    payload: Contact;
}
export interface AddNewContactErrorAction {
    type: typeof ADD_NEW_CONTACT_ERROR;
    payload: string;
}
export interface AddNewNumbersToContactAction {
    type: typeof ADD_NEW_NUMBERS_TO_CONTACT;
}
export interface AddNewNumbersToContactSuccessAction {
    type: typeof ADD_NEW_NUMBERS_TO_CONTACT_SUCCESS;
    payload: Contact;
}
export interface AddNewNumbersToContactErrorAction {
    type: typeof ADD_NEW_NUMBERS_TO_CONTACT_ERROR;
    payload: string;
}


export type ContactStoreTypes = SetUserContactsAction | SetUserContactsSuccessAction | SetUserContactsErrorAction | ContactsLoadingAction | SetContactDetailsAction | AddNewContactAction | AddNewContactSuccessAction | AddNewContactErrorAction | AddNewNumbersToContactAction | AddNewNumbersToContactSuccessAction | AddNewNumbersToContactErrorAction;