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

    default:
      break;
  }
};

invokeAction({
  action: "updateById",
  id: "Ec1a0yARbL86GTtgxwKcj",
  name: "Ben Bat",
  email: "Ben490@gmail.com",
  phone: "+4906634588512",
});
