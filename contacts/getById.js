const getAll = require("./getAll");

const getById = async(id) => {
    const contactsList = await getAll();
    const result = contactsList.find(item => item.id === id);
    if(!result){
        return null;
    }
    return result;
}

module.exports = getById;