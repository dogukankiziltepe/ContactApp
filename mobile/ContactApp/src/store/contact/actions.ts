import { Contact } from "../../types/Contact";
import { ADD_NEW_CONTACT_SUCCESS, ADD_NEW_NUMBERS_TO_CONTACT, ADD_NEW_NUMBERS_TO_CONTACT_ERROR, SET_CONTACT_DETAILS, SET_USER_CONTACTS, SET_USER_CONTACTS_ERROR, CONTACTS_LOADING, SET_USER_CONTACTS_SUCCESS } from "./types";


export function setContacts (payload : Contact[]){
    return {
        type: SET_USER_CONTACTS_SUCCESS,
        payload
    }
}

export function setContactLoading(payload:boolean){
    return {
        type: CONTACTS_LOADING,
        payload
    }
}

export function setContactsError(payload:string){
    return {
        type: SET_USER_CONTACTS_ERROR,
        payload
    }
}

export function setContactDetail(payload : Contact){
    return {
		type: SET_CONTACT_DETAILS,
		payload
	}
}

export function addNewContact(payload : Contact){
    return {
        type: ADD_NEW_CONTACT_SUCCESS,
        payload
    }
}

export function addNewNumbersToContact(payload : Contact){
    return {
        type: ADD_NEW_NUMBERS_TO_CONTACT,
        payload
    }
}

export function AddNewNumbersToContactError(payload : string){
    return {
        type: ADD_NEW_NUMBERS_TO_CONTACT_ERROR,
        payload
    }
}

export function AddNewNumbersToContactLoading(payload : boolean){
    return {
        type: CONTACTS_LOADING,
        payload
    }
}


