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

    case "updateById":
      const updateContact = await contacts.updateContactById(
        id,
        name,
        email,
        phone
      );
      return console.log(updateContact);

    case "removeContact":
      const removedContact = await contacts.removeContactById(id);
      if (!removedContact) {
        console.log("Error, there is no contact with such id");
        return;
      }
      console.log(removedContact);
      return console.log(removedContact);
    //   return console.log(`Contact successfully removed: ${removedContact}`);

    default:
      break;
  }
};

invokeAction({
  action: "removeContact",
  id: "Z5sbDlS7pCzNsnAHLtDJd",
  //   name: "Ben Bat",
  //   email: "Ben490@gmail.com",
  //   phone: "+4906634588512",
});
