const mongoose = require("mongoose");

const URI = process.env.MONGODB_URI || "mongodb://localhost/databasetest";

mongoose.connect(URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const connection = mongoose.connection;

connection.once("open", () => console.log("DB is connected")); //if the connection exists with the db display the message
