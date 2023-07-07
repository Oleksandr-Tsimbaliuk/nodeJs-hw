const contacts = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "read":
      const data = await contacts.getAllContacts();
      return console.log(data);
    case "getContact":
      const getContact = await contacts.getContactById(id);
      console.log(getContact);

    default:
      break;
  }
};

invokeAction({ action: "getContact", id: "05olLMgyVQdWRwgKfg5J6" });
