import ContactService from "../../services/ContactService";
import { Contact } from "../../types/Contact";
import { ContactRequest, NewContactRequest } from "../../types/ContactRequest";
import { addNewContact, addNewNumbersToContact, setContactDetail, setContactLoading, setContacts, setContactsError } from "../contact/actions";

const contactService = new ContactService();

export function getContacts (userId: number):any{
    return async (dispatch: any) => {
        dispatch(setContactLoading(true));
        const response = await contactService.getContacts(userId);
        if (response.httpStatus === 200) {
            dispatch(setContacts(response.data));
        }
        else { 
            dispatch(setContactsError(response.data));
        }
        dispatch(setContactLoading(false));
        return response
    }
}
export function getContactDetails (contactId: number):any{
    return async (dispatch: any) => {
        dispatch(setContactLoading(true));
        const response = await contactService.getContact(contactId);
        if (response.httpStatus === 200) {
            dispatch(setContactDetail(response.data));
        }
        else { 
            dispatch(setContactsError(response.data));
        }
        dispatch(setContactLoading(false));
    }
}
export function addContact (contact: NewContactRequest):any{
    return async (dispatch: any) => {
        dispatch(setContactLoading(true));
        const response = await contactService.addContact(contact);
        if (response.httpStatus === 201) {
            dispatch(addNewContact(response.data));
        }
        else { 
            dispatch(setContactsError(response.data));
        }
        dispatch(setContactLoading(false));
    }
}
export function addNewNumbers (request: ContactRequest):any{
    return async (dispatch: any) => {
        dispatch(setContactLoading(true));
        const response = await contactService.addPhoneNumbers(request);
        if (response.httpStatus === 201) {
            dispatch(addNewNumbersToContact(response.data));
        }
        else { 
            dispatch(setContactsError(response.data));
        }
        dispatch(setContactLoading(false));
    }
}

