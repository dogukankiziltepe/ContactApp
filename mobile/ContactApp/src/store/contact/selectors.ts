import { useSelector } from "react-redux";
import { RootState } from "../reducer";

export const getUserContacts = () => {
    const contacts = useSelector((state: RootState) => state.contact.contacts);
    return contacts;
    }

export const getUserContactDetails = () => {
    const contactDetails = useSelector((state: RootState) => state.contact.contactDetails);
    return contactDetails;
    }

export const getUserContactsLoading = () => {
    const contactsLoading = useSelector((state: RootState) => state.contact.loading);
    return contactsLoading;
    }

export const getUserContactsError = () => {
    const contactsError = useSelector((state: RootState) => state.contact.error);
    return contactsError;
    }
