const fs = require('fs');

const dbPath = './db/db.json';

// Function to save the tasks in the database
const saveDB = (db) => fs.writeFileSync(dbPath, JSON.stringify(db));

// Function to read the tasks from the database
const readDB = () => {
  !fs.existsSync(dbPath) && fs.writeFileSync(dbPath, '[]');

  const db = fs.readFileSync(dbPath, 'utf-8');

  return JSON.parse(db);
};

module.exports = {
  saveDB,
  readDB,
};
