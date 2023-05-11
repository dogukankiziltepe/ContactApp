//importing modules
const db = require("../models");

// Assigning users to the variable User
const User = db.User;
const Contact = db.Contact;

//signing a user up
//hashing users password before its saved to the database with bcrypt
const createContact = async (req, res) => {
 try {
   const { userID, name, surname,phoneNumbers } = req.body;
   const user = await User.findOne({
        where: {
            id: userID,
        },
    });
   const data = {
     name,
     surname,
     userID: user.id,
   };
   //saving the user
   const contact = await Contact.create(data);
    if (phoneNumbers) {
        phoneNumbers.forEach(async (phoneNumber) => {
            const data = {
                phoneNumber,
                contactID: contact.id,
            };
            await db.PhoneNumber.create(data);
        });
    }
   //if user details is captured
   //generate token with the user's id and the secretKey in the env file
   // set cookie with the token generated
   if (contact) {
     //send users details
     return res.status(201).send(contact);
   } else {
     return res.status(409).send("Details are not correct");
   }
 } catch (error) {
   console.log(error);
 }
};

// get contacts by user id
const getContacts = async (req, res) => {
    try {
        const userID  = req.params.userId;
        const contacts = await Contact.findAll({
        where: {
            userID: userID,
        },
        include: [{ model: db.PhoneNumber }]
        });
        if (contacts) {
        return res.status(200).send(contacts);
        } else {
        return res.status(409).send("Details are not correct");
        }
    } catch (error) {
        console.log(error);
    }
}

//get contact by contact id
const getContact = async (req, res) => {
    try {
        const contactID  = req.params.id;
        const contact = await Contact.findOne({
        where: {
            id: contactID,
        },
        include: [{ model: db.PhoneNumber }]
        });
        if (contact) {
        return res.status(200).send(contact);
        } else {
        return res.status(409).send("Details are not correct");
        }
    } catch (error) {
        console.log(error);
    }
}


// delete contact by contact id
const deleteContact = async (req, res) => {
    try{
        await db.Contact.destroy({
            where: {
                id: req.params.contactId,
            },
        });
        return res.status(201).send("Contact deleted successfully");
    }
    catch(error){
        console.log(error);
    }
}



module.exports = {
    createContact,
    getContacts,
    deleteContact,
    getContact
   };