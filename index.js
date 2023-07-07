const contacts = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "read":
      const data = await contacts.getAllContacts();
      return console.log(data);
    case "getContact":
      const getContact = await contacts.getContactById(id);
      console.log(getContact);
    case "addContact":
      const newContact = await contacts.addContact({ name, email, phone });
      return console.log(newContact);

    default:
      break;
  }
};

invokeAction({
  action: "addContact",
  name: "Ben",
  email: "Ben@gmail.com",
  phone: "+386634588512",
});
