const express = require("express");
// colors
const colors = require("colors");

const cors = require("cors");

require("dotenv").config();
const { graphqlHTTP } = require("express-graphql");

// connect DB
const connectDB = require("../server/config/db");
connectDB();

const schema = require("./schema/schema");
const port = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.listen(port, console.log(`Server running on port ${port}`));
