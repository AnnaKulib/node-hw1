const getAll = require("./getAll");
const updateContactsList = require("./updateContactsList");

const updateById = async(id, name, email, phone) => {
    const contactsList = await getAll();
    
    const updateData = {
        name,
        email,
        phone,
      };

    const idx = contactsList.findIndex(item => item.id === id);
    if(idx === -1){
        return null;
    }
    contactsList[idx] = {id, ...updateData};
    await updateContactsList(contactsList);
    return contactsList[idx];
}

module.exports = updateById;