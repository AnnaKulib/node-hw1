const { v4 } = require("uuid");

const getAll = require("./getAll");
const updateContactsList = require("./updateContactsList");

const add = async (name, email, phone) => {
  const contactsList = await getAll();

  const newData = {
    name,
    email,
    phone,
  };

  const newContact = { id: v4(), ...newData };
  contactsList.push(newContact);
  console.log(contactsList);
  await updateContactsList(contactsList);
  return newContact;
};

module.exports = add;
