import { Contact } from "../types/Contact";
// @ts-ignore
import { HttpClient } from '@library/HttpClient';
// @ts-ignore
import { apiConfig, getUrlCreate } from '../config/apiConfig';
import { ContactRequest, NewContactRequest } from "../types/ContactRequest";

const client = HttpClient.getClient();
export default class ContactService {
    async getContacts(userid:number){  
        return client.get(getUrlCreate(apiConfig.prefixes.contact.getContacts)+`/${userid}`);
    }
    async getContact(id:number) {
        return client.get(getUrlCreate(apiConfig.prefixes.contact.getContactDetails)+`/${id}`);
    }
    async deleteContact(id:number) {
        return client.get(getUrlCreate(apiConfig.prefixes.contact.deleteContact)+`/${id}`);
    }
    async addContact(contact:NewContactRequest) {
        return client.post(getUrlCreate(apiConfig.prefixes.contact.addContact),contact);
    }
    async addPhoneNumbers(request : ContactRequest) {
        return client.post(getUrlCreate(apiConfig.prefixes.contact.addPhoneNumber),request);
    }
    async deletePhoneNumber(id:number) {
        return client.get(getUrlCreate(apiConfig.prefixes.contact.deletePhoneNumber)+`/${id}`);
    }
    
}
