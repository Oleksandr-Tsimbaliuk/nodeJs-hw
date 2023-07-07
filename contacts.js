const fs = require("fs/promises");
const { nanoid } = require("nanoid");
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

const addContact = async ({ name, email, phone }) => {
  const contacts = await getAllContacts();
  const newContact = {
    id: nanoid(),
    name,
    email,
    phone,
  };
  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return newContact;
};

module.exports = {
  getAllContacts,
  getContactById,
  addContact,
};
