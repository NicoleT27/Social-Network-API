require("dotenv").config();
const express = require ("express");
const {MongoClient} = require("mongodb");
const { connection } = require("mongoose");

const PORT = process.env.PORT || 3001;
const app = express();

const connectionStringURI = process.env.MONGOURI;
const client = new MongoClient(connectionStringURI);


const express = require("express");
const db = require("./config/connection");
const routes = require("./routes");



app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`Server listening on: http://localhost:" + ${PORT}`);
  });
});
