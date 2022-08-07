const getAll = require("./getAll");
const updateContactsList = require("./updateContactsList");

const removeById = async(id) => {
    const contactsList = await getAll();
    const idx = contactsList.findIndex(item => item.id === id);
    if(idx === -1){
        return null;
    }
    const [removeContact] = contactsList.splice(idx, 1);
    await updateContactsList(contactsList);
    return removeContact;

    // or variant with filter:
    // const newContactsList = contactsList.filter((_, index) => index !== idx);
    // await updateContactsList(newContactsList);
    // return contactsList[idx];
    
}

module.exports = removeById;