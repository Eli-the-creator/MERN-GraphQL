const { bgCyan } = require("colors");
const mongoose = require("mongoose");

const connectDB = async () => {
  const conn = mongoose.connect(process.env.MONGO_DB);

  console.log(`MONGO DB CONNECTED ${(await conn).connection.host}`.bgCyan.bold);
};

module.exports = connectDB;
