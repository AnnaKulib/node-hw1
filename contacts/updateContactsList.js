const fs = require("fs/promises");
const filePath = require("./filePath");

const updateContactsList = async(contactsList) => {
    await fs.writeFile(filePath, JSON.stringify(contactsList, null, 2));
}

module.exports = updateContactsList;