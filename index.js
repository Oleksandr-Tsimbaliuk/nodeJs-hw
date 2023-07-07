const contacts = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "read":
      const allBooks = await contacts.getAllContacts();
      return console.log(allBooks);

    default:
      break;
  }
};

invokeAction({ action: "read" });
