const { connect, connection } = require("mongoose");

const connectionString = process.env.MONGOURI || 3001;

connect(connectionString);

module.exports = connection;
