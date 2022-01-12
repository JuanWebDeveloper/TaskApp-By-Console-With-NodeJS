const fs = require('fs');

const dbPath = './db/db.json';

// Function to save the tasks in the database
const saveDB = (db) => fs.writeFileSync(dbPath, JSON.stringify(db));

module.exports = {
  saveDB,
};
