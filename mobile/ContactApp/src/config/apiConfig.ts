

const prefixes = {
  auth: {
    login: "users/login",
    register: "users/signup",
    getAllUsers: "users/getallusers",
    getUserDetails: "users/getuser",
    updateUser: "users/updateUser",
    deleteUser: "users/deleteUser",
  },
  contact:{
    getContacts: "contacts/getContacts",
    getContactDetails: "contacts/getContactDetails",
    addContact: "contacts/addContact",
    deleteContact: "contacts/deleteContact",
    addPhoneNumber: "phonenumbers/addPhoneNumber",
    deletePhoneNumber: "phonenumbers/deletePhoneNumber",
  }
};

const Prod = true;

export const apiConfig = {
  prefixes,
  baseURL: Prod ? "http://localhost:3000/" : "http://localhost:3000/",
};

export function getUrlCreate(url: string): string {
  return `${apiConfig.baseURL}${url}`;
}