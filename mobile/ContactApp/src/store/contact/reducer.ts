import { ADD_NEW_CONTACT, ADD_NEW_CONTACT_ERROR, ADD_NEW_CONTACT_SUCCESS, ADD_NEW_NUMBERS_TO_CONTACT, ADD_NEW_NUMBERS_TO_CONTACT_ERROR, ADD_NEW_NUMBERS_TO_CONTACT_SUCCESS, ContactStore, SET_CONTACT_DETAILS, SET_USER_CONTACTS, SET_USER_CONTACTS_ERROR, CONTACTS_LOADING, SET_USER_CONTACTS_SUCCESS } from "./types";
import { ContactStoreTypes } from "./types";
const initialState: ContactStore = {
    contacts: null,
    contactDetails: null,
    loading: false,
    error: null,
};

export function contactReducer(state = initialState, action:ContactStoreTypes): ContactStore {
    switch (action.type) {
        case SET_USER_CONTACTS:
            return {
                ...state,
            };
        case SET_USER_CONTACTS_SUCCESS:
            return {
                ...state,
                contacts: action.payload,
            };
        case SET_USER_CONTACTS_ERROR:
            return {
                ...state,
            };
        case CONTACTS_LOADING:
            return {
                ...state,
            };
        case SET_CONTACT_DETAILS:
            return {
                ...state,
                contactDetails: action.payload,
            };
        case ADD_NEW_CONTACT:
            return {
                ...state,
            };
        case ADD_NEW_CONTACT_SUCCESS:
            return {
                ...state,
            }
        case ADD_NEW_CONTACT_ERROR:
            return {
                ...state,
            }
        case ADD_NEW_NUMBERS_TO_CONTACT:
            return {
                ...state,
            }
        case ADD_NEW_NUMBERS_TO_CONTACT_SUCCESS:
            return {
                ...state,
                contactDetails: action.payload,
            }
        case ADD_NEW_NUMBERS_TO_CONTACT_ERROR:
            return {
                ...state,
            }
        default:
            return state;
        }
}