const fs = require("fs/promises");
// const { nanoid } = require("nanoid");
path = require("path");

const contactsPath = path.join(__dirname, "db/contacts.json");

const getAllContacts = async () => {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
};

const getContactById = async (contactId) => {
  const contacts = await getAllContacts();
  result = contacts.find((contact) => contact.id === contactId);
  return result || null;
};

module.exports = {
  getAllContacts,
  getContactById,
};
