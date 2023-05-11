//importing modules
const db = require("../models");

// Assigning users to the variable User
const PhoneNumber = db.PhoneNumber;

//add phone numbers to contact
const addPhoneNumbers = async (req, res) => {
    try {
        const { contactID, phoneNumbers } = req.body;
        if (phoneNumbers) {
            phoneNumbers.forEach(async (phoneNumber) => {
                const data = {
                    phoneNumber,
                    contactID: contactID,
                };
                await PhoneNumber.create(data);
            });
        }
        return res.status(201).send("Phone numbers added successfully");
    } catch (error) {
        console.log(error);
    }
}

// delete phone number from contact
const deletePhoneNumber = async (req, res) => {
    try{
        await PhoneNumber.destroy({
            where: {
                id: req.params.phoneNumberId,
            },
        });
        return res.status(201).send("Phone number deleted successfully");
    }
    catch(error){
    }
}

module.exports = {
    addPhoneNumbers,
    deletePhoneNumber,
   };