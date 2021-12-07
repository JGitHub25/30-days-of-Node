const express = require("express");
const app = express();
require("dotenv").config();

app.use(express.static("./public"));

app.get("/test", (req, res) => {
  res.status(200).send("Test passed.");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}.`);
  console.log(`____________App in ${process.env.NODE_ENV} stage____________`);
});
