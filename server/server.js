const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
// get driver connection
 
app.listen(port, () => {
  // perform a database connection when server start
  console.log(`Server is running on port: ${port}`);
  });
