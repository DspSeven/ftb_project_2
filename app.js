const express = require("express");
const { open } = require("sqlite");
const sqlite3 = require("sqlite3");
const path = require("path");

const databasePath = path.join(__dirname, "moviesData.db");

const app = express();

app.use(express.json());

let database = null;

const initializeDbAndServer = async () => {
  try {
    database = await open({
      filename: databasePath,
      driver: sqlite3.Database,
    });
    app.listen(3000, () => {
      console.log("Server Running at http://localhost:3000/");
    });
  } catch (error) {
    console.log(`DB error:${error.message}`);
    process.exit(1);
  }
};
initializeDbAndServer();


app.post('/', async (req, res) => {
  const { title } = req.body;
  const createMsg = `
    CREATE TABLE message(message VARCHAR(250));
    INSERT INTO message(message)
    VALUES ("${title}");
  `;
   await database.run(createMsg);
  res.send("Successfully created");
});

