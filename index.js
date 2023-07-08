const contacts = require("./contacts");
const { Command } = require("commander");
const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const data = await contacts.getAllContacts();
      return console.table(data);
    case "get":
      const getContact = await contacts.getContactById(id);
      console.table(getContact);
    case "add":
      const newContact = await contacts.addContact({ name, email, phone });
      return console.table(newContact);

    case "updateById":
      const updateContact = await contacts.updateContactById(
        id,
        name,
        email,
        phone
      );
      return console.table(updateContact);

    case "remove":
      const removedContact = await contacts.removeContactById(id);
      if (removedContact === null) {
        console.log("Error, there is no contact with such id");
        return;
      }
      return console.table(removedContact);
    //   return console.log(`Contact successfully removed: ${removedContact}`);

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

invokeAction(argv);

// # Получаем и выводим весь список контактов в виде таблицы (console.table)
// node index.js --action list

// # Получаем контакт по id - выводим в консоль объект контакта или null, если контакта с таким id не существует.
// node index.js --action get --id 05olLMgyVQdWRwgKfg5J6

// # Добавляем контакт и выводим в консоль созданный контакт
// node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22

// # Удаляем контакт и выводим в консоль удаленный контакт или null, если контакта с таким id не существует.
// node index.js --action remove --id qdggE76Jtbfd9eWJHrssH

// # Обновляем контакт и выводим в консоль обновленный контакт
// node index.js --action updateById --id wDxLcWRp6c6KqQqe6fZoG --name Mango Bango --email mangoBango@gmail.com --phone 322-66-22
